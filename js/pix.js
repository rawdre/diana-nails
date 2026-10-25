/*
  Pix "copia e cola" (BR Code / EMV) builder — static Pix with a fixed amount.
  Spec: Manual de Padrões para Iniciação do Pix (BCB). No backend needed:
  the client's bank app reads the QR / code and pays straight to the key.
*/
(function (root) {
  function field(id, value) {
    const v = String(value);
    return id + String(v.length).padStart(2, '0') + v;
  }

  // CRC16/CCITT-FALSE (poly 0x1021, init 0xFFFF) as required by the BR Code spec
  function crc16(str) {
    let crc = 0xffff;
    for (let i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (let b = 0; b < 8; b++) {
        crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
        crc &= 0xffff;
      }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
  }

  // Strip accents / unsupported chars: the spec only allows plain ASCII here
  function clean(text, max) {
    return String(text)
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^A-Za-z0-9 ]/g, '')
      .toUpperCase().trim().slice(0, max);
  }

  function buildPixPayload({ key, name, city, amount, txid }) {
    if (!key) throw new Error('Pix key is required');
    const value = Number(amount);
    if (!(value > 0)) throw new Error('Pix amount must be positive');
    const ref = (String(txid || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 25)) || '***';
    const payload =
      field('00', '01') +
      field('26', field('00', 'br.gov.bcb.pix') + field('01', key)) +
      field('52', '0000') +
      field('53', '986') +
      field('54', value.toFixed(2)) +
      field('58', 'BR') +
      field('59', clean(name, 25)) +
      field('60', clean(city, 15)) +
      field('62', field('05', ref)) +
      '6304';
    return payload + crc16(payload);
  }

  const api = { buildPixPayload, crc16 };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Pix = api;
})(this);
