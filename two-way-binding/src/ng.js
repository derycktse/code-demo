class Scope {
  constructor() {
    this.$$watchers = []
  }

  $watch(name, exp, listener) {
    this.$$watchers.push({
      name: name,
      last: '',
      newVal: exp,
      listener: listener || function () { }
    })
  }

  $digest() {
    let bindList = document.querySelectorAll('[ng-bind]')
    let dirty = true

    while (dirty) {
      dirty = false
      for (let i = 0; i < this.$$watchers.length; i++) {
        let newVal = this.$$watchers[i].newVal()
        let oldVal = this.$$watchers[i].last

        if (newVal !== oldVal) {
          dirty = true
          this.$$watchers[i].listener(oldVal, newVal)
          this.$$watchers[i].last = newVal

          for (let j = 0; j < bindList.length; j++) {
            let dom = bindList[j]
            let modelName = dom.getAttribute('ng-bind')
            let tagName = dom.tagName

            if (modelName == this.$$watchers[i].name) {
              if (tagName == 'INPUT') {
                dom.value = this[modelName]
              } else {
                dom.innerHTML = this[modelName]
              }
            }
          }

        }
      }
    }
  }

}


window.onload = function () {
  window.$scope = new Scope()
  $scope.count = 0
  $scope.increment = function () {
    this.count++
  }

  let bindList = document.querySelectorAll('[ng-click]')
  for (let i = 0; i < bindList.length; i++) {
    bindList[i].onclick = ((index) => {
      return () => {
        $scope[bindList[index].getAttribute("ng-click")]();
        $scope.$digest();
      }
    })(i)
  }

  let inputList = document.querySelectorAll('input[ng-bind]')
  for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener('input', (index => {
      return () => {
        $scope[inputList[index].getAttribute("ng-bind")] = inputList[index].value;
        $scope.$digest();
      }
    })(i))
  }

  for (let key in $scope) {

    if (key != '$$watchers' && typeof $scope[key] !== 'function') {
      $scope.$watch(key, (index => {
        return () => {
          return $scope[index]
        }
      })(key))
    }
  }
  $scope.$digest()

}