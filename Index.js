import ProductManager from "./manager/ProductManager.js";

const manager = new ProductManager();

const env = async () =>{

    let product = {
        title: "Red Dead Redemption 2",
        description: "Adventure",
        price: 2499,
        thumbnail: "not available",
        code: "AV1",
        stock: 23
    }

    let result = await manager.addProduct(product);
    console.log(result);
    
    let products = await manager.getProducts();
    console.log(products);
}

env()