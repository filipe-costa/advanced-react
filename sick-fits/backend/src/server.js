const {GraphQLServer} = require("graphql-yoga")
const Mutation = require("./resolvers/Mutation")
const Query = require("./resolvers/Query")
const db = require("./db")

const resolvers = {
  Query,
  Mutation
}

// Create the Graphql Yoga Server

const yogaServer = () => new GraphQLServer({
  typeDefs: "src/schema.graphql", 
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: (req) => ({
    ...req,
    db
  })
})

module.exports = yogaServer