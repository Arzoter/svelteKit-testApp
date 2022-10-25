// @ts-ignore
    // => ShortCode for ignoring TypeScript error messages
export const load = async ({ fetch }) => {

    const fetchProducts = async () => {
        const productsRes = await fetch('https://dummyjson.com/products?limit=10')
        const productsData = await productsRes.json()
        return productsData.products
    }

    const fetchUsers = async () => {
        const usersRes = await fetch('https://dummyjson.com/users?limit=10')
        const usersData = await usersRes.json()
        return usersData.users
    }

    
    return {
        products: fetchProducts(),
        users: fetchUsers()
    }
}