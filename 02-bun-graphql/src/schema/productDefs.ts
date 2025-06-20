


export const productDefs=`
type Product{
    id:ID!
    name:String!
}

type Query{
    products:[Product!]!
}

type Mutation{
    createProduct(name:String!):Product
}
`