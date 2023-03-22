/*Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - 
categoria - precio. Realizar las siguientes tareas:

Mostrar la tabla completa

filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.

Buscar un producto serum y mostrarlo por pantalla,

Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.*/

let listaProductos = [
    {
      nombreProducto: "Hidratante facial",
      precio: 3500,
      categoria: "Hidratante",
    },
    { 
      nombreProducto: "Tonico exfoliante", 
      precio: 2350.45, 
      categoria: "Tonico" },
    {
      nombreProducto: "Protector solar factor 50",
      precio: 3300,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar toque seco factor 50",
      precio: 4100,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar con color factor 50",
      precio: 3850.5,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Gel de limpieza facial",
      precio: 1740.99,
      categoria: "Limpieza",
    },
    { 
      nombreProducto: "Tonico hidratante", 
      precio: 1250.99, 
      categoria: "Tonico" 
    },
    { 
      nombreProducto: "Sérum hidratante", 
      precio: 4250.99, 
      categoria: "Sérum" 
    },
    {
      nombreProducto: "Exfoliante de azúcar cherry",
      precio: 1200,
      categoria: "Labios",
    },
    {
      nombreProducto: "Pads de hidrogel para contorno de ojos",
      precio: 2800,
      categoria: "Ojos",
    },
    {
      nombreProducto: "Mascarilla facial",
      precio: 3250.99,
      categoria: "Mascaras",
    },
    { 
      nombreProducto: "Sérum facial con PHA", 
      precio: 3200, 
      categoria: "Sérum" 
    },
    { 
      nombreProducto: "Bálsamo labial", 
      precio: 3200, 
      categoria: "Labios" 
    },
    { 
      nombreProducto: "Crema contorno de ojos", 
      precio: 3200, 
      categoria: "Ojos" 
    },
    {
      nombreProducto: "Protector solar en barra",
      precio: 3800,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Mascara de hidratación y reparación",
      precio: 1200,
      categoria: "Mascaras",
    },
    { 
      nombreProducto: "Agua micellar", 
      precio: 2890, 
      categoria: "Limpieza" 
    },
];

function mostrarTabla(titulo = "No hay un titulo disponible", arrayProductos){

    document.write(`<h2>${titulo}</h2>`);
    document.write('<table><tbody>');
    document.write('<tr>');
    document.write(`<th>Producto</th>`);
    document.write(`<th>Categoria</th>`);
    document.write(`<th>Precio</th>`);
    document.write('</tr>');

    arrayProductos.map(producto =>{
      document.write('<tr>');
      document.write(`<td>${producto.nombreProducto}</td>`);
      document.write(`<td>${producto.categoria}</td>`);
      document.write(`<td>${producto.precio}</td>`);
      document.write('</tr>');
  })
    document.write('</tbody> </table>');
}

let protectoresSolares = listaProductos.filter(producto => producto.nombreProducto.includes('Protector'));

function buscarProducto(productoBuscado, arrayProductos){

    document.write(`<h2>Busqueda de Productos</h2>`);

    let productoEncontrado = arrayProductos.find( producto => producto.nombreProducto.includes(productoBuscado));

    if(productoEncontrado){
      
      document.write(`<p><b>Elemento buscado:</b> ${productoBuscado}</p>`);
      document.write('<b>Resultado de Busqueda</b>');
      document.write(`<p><b>Nombre de Producto:</b> ${productoEncontrado.nombreProducto}</p>`);
      document.write(`<p><b>Categoría:</b> ${productoEncontrado.categoria}</p>`);
      document.write(`<p><b>Precio:</b> ${productoEncontrado.precio}</p>`);
      
    }else{
      document.write(`<p><b>Elemento buscado:</b> ${productoBuscado}</p>`);
      document.write('<b>Resultado de Busqueda</b>');
      document.write(`<p>El producto ${productoBuscado} no fue encontrado</p>`);
    }
}

mostrarTabla('Tabla de Productos', listaProductos);

mostrarTabla('Tabla de Productos filtrados', protectoresSolares);

buscarProducto('Sérum', listaProductos);
buscarProducto('Bruma', listaProductos);
