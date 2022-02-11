
const productos = document.querySelector('.productos')
const fragment = document.createDocumentFragment();
const template = document.getElementById('template_products').content;
const contenedorBusqueda = document.querySelector('.container-search')
const entradaBusqueda = document.querySelector('.input-search')
const contenedorBody = document.getElementById('containerBody')
const botonCarrito = document.querySelector('.buttonCart')

const detectarBotones = document.querySelectorAll('.dropdown-item')

document.addEventListener("DOMContentLoaded", () => {
    products()
    //busquedaApi()
})

contenedorBusqueda.addEventListener('submit', (e)=>{busqueda(e)})

//botonCarrito.addEventListener('click', (e)=>{ cargarCarrito(e)})


const products = async () => {
    try {
        const res = await fetch('https://bsale-test-back.herokuapp.com/api/products')
        const data = await res.json()
        console.log(data)
        pintarProductos(data)
        //detectarBotones(data)
    } catch (err) {
        console.log(err)
    }
}

const busquedaApi = async (prod) => {
    try{
        const res = await fetch(`https://bsale-test-back.herokuapp.com/api/search/${prod}`)
        const data = await res.json()
        console.log(data)
        pintarProductos(data)
    }
    catch(err){
        console.log(err)
    }
}

const busquedaCategoryApi = async (category) => {
    try{
        const res = await fetch(`https://bsale-test-back.herokuapp.com/api/products/category/${category}`)
        const data = await res.json()
        console.log(data)
        pintarProductos(data)
    }
    catch(err){
        console.log(err)
    }
}


const pintarProductos = (products)=>{
    /*const productos = document.querySelector('.productos')
    const fragment = document.createDocumentFragment();
    const template = document.getElementById('template_products').content;*/
    console.log(template)
    products.forEach(item => {
        if(!item.url_image){
            template.querySelector('img').setAttribute('src','./images/noimage.png');
        }else{
            template.querySelector('img').setAttribute('src',item.url_image);
        }
        //template.querySelector('img').setAttribute('src',item.url_image);
        template.querySelector('.name-product').textContent = item.name;
        template.querySelector('.price-product').textContent = `$${item.price}.0`;
        template.querySelector('.category-product').textContent = item.category;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    console.log(fragment)
    productos.appendChild(fragment);
}

const busqueda = (e)=>{
    e.preventDefault()
    //console.log(e)
    if(e.target.classList.contains('container-search')){
        //console.log(e)
        //console.log(entradaBusqueda.value)
        
       // $('#contentId').load('contenido.html')
        //$('#containerBody').load('')
        busquedaApi(entradaBusqueda.value)
        $('#refresh').load(window.location.href+" #refresh")
        //$('#containerBody').load(window.location.href+" #containerBody")
    }
    e.stopPropagation()
}

/*
const cargarCarrito = (e)=>{
    e.preventDefault()
    console.log(e)
    $('#containerBody').load('carrito.html')

    e.stopPropagation()
}
*/

detectarBotones.forEach( itemCat =>{
    itemCat.addEventListener('click', (e)=>{
        buscarxcat(e)
    })
})

const buscarxcat = (e)=>{
    e.preventDefault()

    busquedaCategoryApi(e.target.id)
    $('#refresh').load(window.location.href+" #refresh")
    
    e.stopPropagation()
}


