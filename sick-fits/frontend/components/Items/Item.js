import React, {PureComponent} from "react"
import Link from "next/link"
import PropTypes from "prop-types"
import Title from "../styles/Table"
import ItemStyles from "../styles/ItemStyles"
import PriceTag from "../styles/PriceTag"
import formatMoney from "../../lib/formatMoney"
import Item from "../styles/ItemStyles";

class Items extends PureComponent {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render(){
    const {title, id, price, description, image} = this.props.data
    return (
     <ItemStyles>
       {image && <img src={image} alt={title} />}
       <Title>
         <Link  href={{
            pathname: "/item",
            query: {id}
          }}>
          <a>
          {title}
          </a>
         </Link>
       </Title>
       <PriceTag>{formatMoney(price)}</PriceTag>
       <p>{description}</p>
       <div className="buttonList">
        <Link href={{
          pathname: "update",
          query: {id}
        }}>
          <a>
            Edit
          </a>
        </Link>
        <button>Add to Cart</button>
        <button>Delete</button>
       </div>
     </ItemStyles>
    )
  }
}

export default Items