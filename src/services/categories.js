import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistance/localStorage";
import { handleRenderList } from "../views/store";

// CATEGORIA
const handleFilterProductsByCategory =(categoryIn)=>{
    const products = handleGetProductLocalStorage()
    switch(categoryIn){
        case categoriaActiva:
            handleRenderList(products)
            break
        case "Todo":
            handleRenderList(products)
            break

        case "Hamburguesas":
        case "Papas":   
        case "Gaseosas":
            const result=products.filter((el)=>el.categoria===categoryIn)
            handleRenderList(result)
        default:
            break
        case"mayorPrecio":
            const resultPrecioMayor=products.sort((a,b)=>b.precio-a.precio)
            handleRenderList(resultPrecioMayor)
            break
        case"menorPrecio":
            const resultPrecioMenor=products.sort((a,b)=>a.precio-b.precio)
            handleRenderList(resultPrecioMenor)
            break
} 
}


// Render de la vista categorias
export const renderCategories = () =>{
    // Se toman elementos de la lista
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los Productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;

    // Añadimos el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener('click',()=>{
            handleClick(liElement);
        });
    });
    // verificamos y manejamos el estilo del elemento activo
    const handleClick = (element)=>{
        handleFilterProductsByCategory(element.id);
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive');
            } else{
                if(element == el){
                    el.classList.add('liActive');
                }
            }
        })
    };
};