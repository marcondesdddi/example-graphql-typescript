import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'

async function main() {
  const schema = await buildSchema({
		resolvers: [__dirname + "/**/*.resolver.{ts,js}"],
		emitSchemaFile: true
	})

	const app = Express()

	const server = new ApolloServer({
		schema
	})

	server.applyMiddleware({ app })

	app.listen(4001, () => {
		console.log('Server is running on http://localhost:4001/graphql')
	})
}

main()