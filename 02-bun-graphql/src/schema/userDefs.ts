


export const userDefs=`

type User{
    id:ID!
    name:String!
    email:String!
}

type Query{
    users:[User!]!
}

type Mutation{
    createUser(name:String!,email:String!):User
}
`