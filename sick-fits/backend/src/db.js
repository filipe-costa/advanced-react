// File connects to remote PrismaDB and allows us to make graphql queries with JS
const {Prisma} = require("prisma-binding")

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
})


module.exports = db