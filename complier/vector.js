// 访问者
function Visitor() {
  this.visit = function(concreteElement) {
      concreteElement.doSomething();
  }
}
// 节点类
function Node() {
  this.doSomething = function() {
      console.log("这是一个节点");
  }
  this.accept = function(visitor) {
      visitor.visit(this);
  }
}
// Client
var node = new Node();
var v = new Visitor();
node.accept(v);
