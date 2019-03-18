import React, {PureComponent} from "react"
import Link from "next/link"
import NavStyles from "../styles/NavStyles"

class Nav extends PureComponent {
  render(){
    return(
      <NavStyles>
        <Link href="/items">
         <a>Shop</a> 
        </Link>
        <Link href="/sell">
          <a>Sell</a> 
        </Link>
        <Link href="/signup">
         <a>Signup</a> 
        </Link>
        <Link href="/order">
         <a>Orders</a> 
        </Link>
        <Link href="/me">
         <a>me</a> 
        </Link>
      </NavStyles>
    )
  }
}

export default Nav