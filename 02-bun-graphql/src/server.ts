import { createYoga } from "@graphql-yoga/common";
import { userDefs } from "./schema/userDefs";
import { UserResolver } from "./schema/userResolver";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { productDefs } from "./schema/productDefs";
import { ProductResolver } from "./schema/productResolver";



const schema = makeExecutableSchema({
    typeDefs: [userDefs, productDefs],
    resolvers: [UserResolver, ProductResolver],
});

const yoga = createYoga({
    schema,
    graphiql: true
})



export const server = Bun.serve({
    port: 3000,
    fetch: yoga.fetch
})

console.log("🚀 GraphQL server running at http://localhost:3000/graphql");


