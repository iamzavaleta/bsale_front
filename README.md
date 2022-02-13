# BSALE FRONTEND 

## Deploy
```sh
https://bsalefronted.netlify.app/
```

## Librerías usadas

* JQUERY [CDN](https://releases.jquery.com/)
* Bootstrap [v5.0](https://getbootstrap.com/docs/5.0/getting-started/download/)

## Estructura de carpetas

```text
├── css
│   └── style.css
├── images
│   ├── logo.jpg   // logo Bsale
│   └── noimage.jpg   
|── index.html
|── main.js
|── README.md
```

## Variables

| File | Name | type | Description |
| - | - | - | - |
| main.js | productos | `void` | Selecciona la tag de productos con la clase productos |
| main.js | fragnebt | `void` | Selecciona la tag de fragment | 
| main.js | template | `void` | Selecciona la tag de templante con la clase template_products |
| main.js | entradaBusqueda | `void` | Selecciona la tag de productos con la clase container-search |

## Funciones

| File | Name | Return | Description |
| - | - | - | - |
| main.js | products() | `void` | Consume el API del backend y retorna la data |
| main.js | busquedaApi() | `void` | Consume el API del backend del endpoint de busqueda y retorna la data |
| main.js | busquedaCategoryApi() | `void` | Consume el API del backend por categoria y retorna la data |
| main.js | pintarProductos() | `void` | Recibe la data y prepara prepara el template para pintar en pantalla |
| main.js | document.addEventListener() | `void` | Agrega un evento al DOM y llama a la función products() |
| main.js | contenedorBusqueda.addEventListener() | `void` | Agrega un evento al contenedor de busqueda y llama a la funcion busqueda() |
| main.js | busqueda() | `void` | Llama a la funcion busquedaApi() y refresca la el contenedor de productos |
| main.js | buscarxcat() | `void` | Llama a la funcion busquedaCategoryApi() y envia el valor de la categoria |


