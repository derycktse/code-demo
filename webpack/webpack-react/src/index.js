import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

class Child extends React.Component {
  constructor() {
    super()
    this.state = { visible: "no" }
  }

  componentWillReceiveProps() {
    debugger
    console.log(arguments)
  }

  render() {
    const props = this.props;
    const state = this.state;
    return (
      <div onClick={() => {
        this.setState({
          visible : "yes"
        })
      }}>
        <div>prop status is : {props.visible}</div>
        <div>state status is : {state.visible}</div>
      </div>
    )
  }
}
class Parent extends React.Component {
  constructor() {
    super()
    debugger
    console.log('constructor')
    this.state = {
      visible : "no"
    }
  }
  shouldComponentUpdate(){
    debugger
    return true
  }
  render() {
    debugger
    console.log('render')
    const { dispatch } = this.props
    return (<div>
      {/* <h1>hello {this.props.name}!!!!!</h1> */}
      <div>{this.props.count}</div>
      <a onClick={() => {
        dispatch({
          type: 'add',
          payload: this.props.count + 1
        })
        this.setState({
          visible : "yes"
        })
      }}>click me</a>
      <Child visible={this.state.visible} />
    </div>)
  }
}


const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'add':
      console.log(action);
      return {
        name: state.name,
        count: action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducer, {
  name: 'deryck',
  count: 0
})

ReactDOM.render(
  <Parent {...store.getState()} {...store} />,
  document.getElementById('app')
)


store.subscribe(() => {
  ReactDOM.render(
    <Parent {...store.getState()} {...store} />,
    document.getElementById('app')
  )

})