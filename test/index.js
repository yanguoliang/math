const { add, subtraction } = require('../dist/bundle');
const { describe, it } = require("mocha")
var assert = require('assert');
describe('Math', function () {
  describe('add()', function () {
    it('should return 3 when add(2,1)', function () {
      assert.strictEqual(add(1, 1), 3);
    });
    it('should return 1 when add(0,1)', function () {
      assert.strictEqual(add(0, 1), 1);
    });
  });
  describe('subtraction()', function () {
    it('should return 0 when subtraction(1,1)', function () {
      assert.strictEqual(subtraction(1, 1), 0);
    });
    it('should return 1 when subtraction(2,1)', function () {
      assert.strictEqual(subtraction(2, 1), 1);
    });
  });
});
