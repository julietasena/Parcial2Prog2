export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    } else{
        return [];
    }
};

// Guardar en localStorage
export const setInLocalStorage = (productIn) =>{
    // Traer elementos
    // Recibir producto
    // Si existe reemplazar, de lo contrario agregar
    let productsInLocal = handleGetProductLocalStorage();
    const existingIndex = productsInLocal.findIndex((productsLocal)=>
        productsLocal.id == productIn.id
    )
    if(existingIndex !== -1){
        productsInLocal[existingIndex] = productIn;
    }else{
        productsInLocal.push(productIn);
    }
    // Setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
}