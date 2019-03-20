import React, {PureComponent} from "react"
import {Mutation} from "react-apollo"
import Router from "next/router"
import gql from "graphql-tag"
import Form from "../styles/Form"
import ErrorMessage from "../ErrorMessage"
import formatMoney from "../../lib/formatMoney"

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $image: String
    $largeImage: String
    $price: Int!
  ) {
    createItem(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
      price: $price
      ){
        id
      }
    }
`

class CreateItem extends PureComponent {

  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: 0
  }

  handleChange = (event) => {
    const {name, type, value} = event.target
    const val = type === "number" ? parseFloat(value) : value
    this.setState({[name]: val})
  }

   handleSubmit = async (event, createItem) => {
    // Stop the form from submitting
    event.preventDefault()
    // Call the mutation
    const res = await createItem()
    // Change to single item page
    Router.push({
      pathname: "/items",
      query: {id: res.data.createItem.id}
    })
  }

  render(){
    const {title, price, description} = this.state
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, {loading, error}) => {
          return (
            <>
              <ErrorMessage error={error} />
              <Form onSubmit={(event) => this.handleSubmit(event, createItem)}>
                <fieldset disabled={loading} aria-busy={loading}>
                  <label htmlFor="title">
                    Title
                    <input type="text" id="title" name="title" placeholder="Title" value={title} onChange={this.handleChange} required />
                  </label>
                  <label htmlFor="price">
                    Price
                    <input type="number" id="price" name="price" placeholder="Price" value={price} onChange={this.handleChange} required />
                  </label>
                  <label htmlFor="Description">
                    Description
                    <textarea type="number" id="description" name="description" placeholder="Enter a description" value={description} onChange={this.handleChange} required />
                  </label>
                  <button type="submit">Submit</button>
                </fieldset>
              </Form>
            </>
          )
        }}
      </Mutation>
    )
  }
}

export default CreateItem