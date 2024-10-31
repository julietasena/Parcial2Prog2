import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct, handleSaveOrModifyElement } from "../services/products";

// POPUP
const acceptButton = document.getElementById('acceptButton');
acceptButton.addEventListener('click', ()=>{
    handleSaveOrModifyElement();
})

const buttonCanel = document.getElementById('cancelButton')
buttonCanel.addEventListener('click',()=>{
    closeModal();
})

export const openModal = ()=>{
    const modal = document.getElementById('modalPopup');
    modal.style.display = 'flex';
    const deleteButton = document.getElementById("deleteButton");

    if(productoActivo){
        deleteButton.style.display = "block";
    }else{
        deleteButton.style.display = "none";
    }

    if(productoActivo){
        const nombre = document.getElementById('nombre'),
        img = document.getElementById('img'),
        precio = document.getElementById('precio'),
        categoria = document.getElementById('categoria');
        nombre.value = productoActivo.nombre;
        img.value = productoActivo.img;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;
    }
}
export const closeModal = ()=>{
    const modal = document.getElementById('modalPopup');
    modal.style.display = 'none';
    setProductoActivo(null);
    resetModal();
}

const resetModal=()=>{
    const nombre = document.getElementById('nombre'),
    img = document.getElementById('img'),
    precio = document.getElementById('precio'),
    categoria = document.getElementById('categoria');

    nombre.value = "";
    img.value = "";
    precio.value = 0;
    categoria.value = "Seleccione una Categoria";
}

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click',()=>{
    handleButtonDelete()
})
const handleButtonDelete = ()=>{
    handleDeleteProduct();
}