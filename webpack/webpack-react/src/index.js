import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

class Dery extends React.Component {
  constructor() {
    super()
    console.log('constructor')
  }
  render() {
    console.log('render')
    const { dispatch } = this.props
    return (<div>
      <h1>hello {this.props.name}!!!!!</h1>
      <div>{this.props.count}</div>
      <a onClick={() => {
        dispatch({
          type: 'add',
          payload: this.props.count + 1
        })
      }}>click me</a>
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
  <Dery {...store.getState() } {...store} />,

  document.getElementById('app')
)


store.subscribe(() => {
  ReactDOM.render(
    <Dery {...store.getState() } {...store} />,

    document.getElementById('app')
  )

})