import React, {PureComponent} from "react"
import {Query} from "react-apollo"
import gql from "graphql-tag"

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      description
    }
  }
`



class Items extends PureComponent {
  render(){
    return(
      <div>
        <p>Items!</p>
        <Query query={ALL_ITEMS_QUERY}>
          {({data, loading, error}) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error: {error.message}</p>
            return data.items.map((item) => {
              return (
                <>
                  <div>{item.id}</div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </>
              )
            })
          }}
        </Query>
      </div>
    )
  }
}

export default Items