import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchbar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css'
// App
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) =>{
    categoriaActiva = categoriaIn;
}
export let productoActivo = null;
export const setProductoActivo = (productoIn) =>{
    productoActivo = productoIn;
}

handleGetProductsToStore();
renderCategories();

// Header
const buttonAdd = document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click', ()=>{
    openModal();
})

// Button Search
const buttonSearch = document.getElementById("button__search");
buttonSearch.addEventListener("click",()=>{
    handleSearchProductByName();
})