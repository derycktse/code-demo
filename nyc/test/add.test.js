var add = require('../add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function () {
  beforeEach(function(done){
    console.log('invode each time')
    setTimeout(function () {
      done('e2')
    }, 1000)
  })
  it('1 加 1 应该等于 2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('test async', function (done) {
    setTimeout(function () {
      done(null)
    }, 1000)
  })
});
