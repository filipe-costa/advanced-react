import React, {PureComponent} from "react"
import styled from "styled-components"
import {Query} from "react-apollo"
import gql from "graphql-tag"
import Item from "./Item"

const Center = styled.div`
  text-align: center;
`

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`

class Items extends PureComponent {
  render(){
    return(
      <Center>
        <p>Items!</p>
        <Query query={ALL_ITEMS_QUERY}>
          {({data, loading, error}) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error: {error.message}</p>
              return (
                <ItemsList>
                  {data.items.map((item) => {
                    return (
                      <Item key={item.id} data={item} />
                    )
                  })}
                </ItemsList>
              )
          }}
        </Query>
      </Center>
    )
  }
}

export default Items