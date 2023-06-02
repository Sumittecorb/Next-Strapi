export const ProductDetail = (_id) => {
    return `${Routes.Product.href}?&slug=${_id}`
}

export const Routes = {
    Home: {
        as: "/",
        href: "/"
    },
    Product: {
        as: "/product",
        href: "/product"
    },

}