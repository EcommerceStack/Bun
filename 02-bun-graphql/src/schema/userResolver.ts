

let users: { id: number; name: string; email: string }[] = [];


export const UserResolver = {
    Query: {
        users: () => users
    },
    Mutation: {
        createUser: (root: any, args: any) => {
            const { name, email } = args;
            const newUser = { id: Date.now(), name, email };
            users.push(newUser)
            return newUser;
        }
    }
}