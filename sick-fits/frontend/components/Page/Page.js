import React, {PureComponent} from "react"
import Meta from "../Meta/Meta"
import Header from "../Header/Header"

class Page extends PureComponent {
  render(){
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Page