
var Parox = (function () {
  var body = document.body;

  function Parox(option) {
    this.dx = this.dy = 0
    this.option = option
    this.element = document.querySelector(option.ele);
    window.requestAnimationFrame(this.render.bind(this));
  }

  Parox.prototype.render = function () {
    var option = this.option
    var direction = option.direction || 1;
    var sx = window.pageXOffset;
    var sy = window.pageYOffset - option.baseMin;

    this.dx = lerp(this.dx, sx, 0.07);
    this.dy = lerp(this.dy, sy, 0.02);


    this.dx = Math.floor(this.dx * 100) / 100;
    this.dy = Math.floor(this.dy * 10000) / 10000;

    this.dy = this.dy < -50 ? -50 : this.dy;
    this.dy = this.dy > 50 ? 50 : this.dy;
    console.log(this.dy)
    var dy = direction * this.dy
    this.element.style.transform = `translate(${this.dx}px, ${dy}px)`;

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