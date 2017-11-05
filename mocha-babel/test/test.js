const add = require('../add');
const assert = require('chai').assert;

describe('add', () => {
  it('add', () => {
    const result = add(1, 2);
    assert.equal(result, 3);
  })
});