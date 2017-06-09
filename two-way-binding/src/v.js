class Look {
  constructor(options) {
    this._init(options)
  }

  _init(options) {
    this.$options = options
    this.$el = document.querySelector(options.el)
    this.$data = options.data
    this.$methods = options.methods

    this._binding = {}
    this._parseData(this.$data)
    this._compile(this.$el)
  }

  _parseData(obj) {
    let value
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        this._binding[key] = {
          _directives: []
        }
        value = obj[key]
        this.convert(key, value)
      }
    }
  }

  convert(key, val) {
    let binding = this._binding[key]
    Object.defineProperty(this.$data, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        console.log(`get data ${val}`);
        return val
      },
      set: function (newVal) {
        console.log(`updata data ${newVal}`)
        if (val != newVal) {
          val = newVal
          binding._directives.forEach(function (item) {
            item.update()
          })
        }
      }
    })
  }
  _parseFunc(attrVal) {
    let args = /\(.*\)/.exec(attrVal)

    if(args){
      args = args[0]
      attrVal = attrVal.replace(args,"")
      args=args.replace(/[\(\)\'\"]/g,'').split(",");
    } else 
    {
      args = []
    }
    return this.$methods[attrVal].bind(this.$data,args)
  }

  _compile(root) {
    let nodes = root.children
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i]

      if (node.children.length) {
        this._compile(node)
      }

      if (node.hasAttribute("v-click")) {
        node.onclick = (() => {
          let attrVal = node.getAttribute("v-click")

          return this._parseFunc(attrVal)
        })()
      }

      if (node.hasAttribute("v-model")) {
        let attrVal = node.getAttribute("v-model")
        this._binding[attrVal]._directives.push(new Directive("input",node, this, attrVal, "value"))
        node.addEventListener("input",(key=>{
          return ()=>{
            this.$data[attrVal]=nodes[key].value
          }
        })(i) )
      }

      if (node.hasAttribute("v-bind")) {
        let attrVal = node.getAttribute('v-bind')

        this._binding[attrVal]._directives.push(new Directive("text", node, this, attrVal, "innerHTML"))

      }
    }
  }
}


class Directive {
  constructor(name, el, vm, exp, attr) {
    this.name = name
    this.el = el
    this.vm = vm
    this.exp = exp
    this.attr = attr

    this.update()
  }

  update() {
    this.el[this.attr] = this.vm.$data[this.exp]
  }
}

window.onload = () => {
  window.app = new Look({
    el: '#app',
    data: {
      count: 0
    }, methods: {
      increment: function () {
        this.count++
      },
      alert(msg) {
        alert(msg)
      }
    }
  })
}