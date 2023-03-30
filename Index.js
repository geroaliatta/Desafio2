// PROCESO DE TESTING

// Se creará una instancia de la clase “ProductManager”.
import ProductManager from "./manager/ProductManager.js";
const manager = new ProductManager('./files/bd.json');

const env = async () =>{

    const product1 = {
        title: "God of War",
        description: "Action",
        price: 4199,
        thumbnail: "not available",
        code: "AC1",
        stock: 25
    }
    const product2 = {
        title: "Red Dead Redemption 2",
        description: "Adventure",
        price: 2499,
        thumbnail: "not available",
        code: "AV1",
        stock: 23
    }
    const product3 = {
        title: "Gotham Knights",
        description: "Action",
        price: 5099,
        thumbnail: "not available",
        code: "AC2",
        stock: 19
    }


    //Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
    console.log(await manager.getProducts());

    //Se llamará al método “addProduct” para agregar dos productos. El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE.
    let result1 = await manager.addProduct(product1);
    console.log(`Product ID ${result1.id} ${result1.title} added successfully`);

    let result2 = await manager.addProduct(product2);
    console.log(`Product ID ${result2.id} ${result2.title} added successfully`);

    //Se llamará el método “getProducts” nuevamente, esta vez deben aparecer los productos recién agregados.
    console.log(await manager.getProducts());
    
    //Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.
    console.log('Busco producto por ID que existe');
    console.log(await manager.getProductById(2));
    console.log('Busco producto por ID que no existe');
    console.log(await manager.getProductById(9));

    //Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
    manager.deleteProduct(7);
    manager.deleteProduct(2);
}

env()


