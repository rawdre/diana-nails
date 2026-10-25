// Run: node js/pix.test.js
const assert = require('assert');
const { buildPixPayload, crc16 } = require('./pix.js');

// CRC-16/CCITT-FALSE check value
assert.strictEqual(crc16('123456789'), '29B1');

const code = buildPixPayload({
  key: '+5561981527431', name: 'Diana Alves Raw', city: 'Brasília', amount: 35, txid: 'DIANA-MANI',
});
assert.ok(code.startsWith('000201'));
assert.ok(code.includes('0014br.gov.bcb.pix0114+5561981527431'));
assert.ok(code.includes('540535.00'));
assert.ok(code.includes('5915DIANA ALVES RAW'));
assert.ok(code.includes('6008BRASILIA'));
assert.ok(code.includes('62130509DIANAMANI'));
// CRC over everything up to and including "6304" must match the last 4 chars
assert.strictEqual(crc16(code.slice(0, -4)), code.slice(-4));

assert.throws(() => buildPixPayload({ key: 'x', name: 'a', city: 'b', amount: 0 }));
assert.throws(() => buildPixPayload({ name: 'a', city: 'b', amount: 10 }));

console.log('pix.test.js: all passed\n' + code);
