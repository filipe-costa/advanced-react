import React, {PureComponent} from "react"
import Link from "next/link"

class Nav extends PureComponent {
  render(){
    return(
      <div>
        <Link href="/">
          Home
        </Link>
        <Link href="/sell">
          Sell
        </Link>
      </div>
    )
  }
}

export default Nav