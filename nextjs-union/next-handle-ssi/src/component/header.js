import React from "react";
import './style.css'

class Header extends React.Component {
  render() {

    const {headerData } = this.props;
    return (
      <div>
        this is header123
        {headerData.map(data=>{
          return (<li>{data.name}</li>)
        })}
      </div>
    )
  }
}

export default Header 