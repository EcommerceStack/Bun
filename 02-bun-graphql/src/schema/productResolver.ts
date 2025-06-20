

let products: { id: number; name: string; }[] = [];


export const ProductResolver = {
    Query: {
        products: () => products
    },
    Mutation: {
        createProduct: (root: any, args: any) => {
            const { name } = args;
            const newProduct = { id: Date.now(), name };
            products.push(newProduct)
            return newProduct;
        }
    }
}