import React, {PureComponent} from "react"
import Nav from "../Nav/Nav"

class Header extends PureComponent {
  render(){
    return(
      <div>
        <div className="bar">
          <a href="">Sick Fits</a>
          <Nav />
        </div>
        <div className="sub-sub">
          <p> Search</p>
        </div>
        <div>Cart</div>
      </div>
    )
  }
}

export default Header