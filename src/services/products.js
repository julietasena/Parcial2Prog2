// Product

import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistance/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList} from "../views/store";



// Funcion para guardar
export const handleSaveOrModifyElement = ()=>{
    const nombre = document.getElementById('nombre').value,
    img = document.getElementById('img').value,
    precio = document.getElementById('precio').value,
    categoria = document.getElementById('categoria').value;
    let object = null;
    if (productoActivo) {
        object={
            ...productoActivo,
            nombre,
            img,
            precio,
            categoria
        }
    }else{
            object={
            id:new Date().toISOString(),  
            nombre,
            img,
            precio,
            categoria
        }
    }
    Swal.fire({
        title: "Guardado!",
        text: "Producto guardado correctamente",
        icon: "success"
    });
    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();  
}
// Eliminar Elemento

export const handleDeleteProduct = () =>{

    Swal.fire({
        title: "Seguro que quieres eliminar este producto?",
        text: "Esta accion es irresible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si quiero eliminarlo!"
        }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=>el.id !== productoActivo.id)
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        } else{
            closeModal();
        }
        });

}