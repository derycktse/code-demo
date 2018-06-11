
var Parox = (function () {
  var body = document.body;

  function Parox(option) {
    this.dy = 0
    this.option = option
    this.element = document.querySelector(option.ele);
    window.requestAnimationFrame(this.render.bind(this));
  }

  Parox.prototype.render = function () {
    var option = this.option
    var direction = option.direction || 1;
    var sy = window.pageYOffset - option.baseMin;

    this.dy = lerp(this.dy, sy, 0.02);


    this.dy = Math.floor(this.dy * 10000) / 10000;

    this.dy = this.dy < -50 ? -50 : this.dy;
    this.dy = this.dy > 50 ? 50 : this.dy;
    console.log(this.dy)
    var dy = direction * this.dy
    this.element.style.transform = `translateY( ${dy}px)`;

    // And we loop again.
    window.requestAnimationFrame(this.render.bind(this));
  }


  // This is our Linear Interpolation method.
  function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  }
  return Parox
})()

// 效果最地的起始点
var baseMin = document.querySelector('#box1').clientHeight;
// 效果最高的起始点
var baseMax = '0'


new Parox({
  ele: '#leftbox',
  direction: 1,
  baseMin: baseMin,
})
new Parox({
  ele: '#rightbox',
  direction: -1,
  baseMin: baseMin,
})