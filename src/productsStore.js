const productsArray = [
    {
        id: "1",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "2",
        title: "Sunglasses",
        price: 59.99
    },
    {
        id: "3",
        title: "Camera",
        price: 390.99
    }
]

const getProductData = (id) => {
    let productData = productsArray.find(product => product.id === id)
    if (productData === undefined) {
        console.log(`Product data does not exist for ID: ${id}`)
        return undefined;
    }
    return productData;
}


export {productsArray, getProductData};