/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados. */


class Producto {
    #codigo;
    #nombre;
    #precio;
    constructor(codigo, nombre, precio) {
      this.#codigo = codigo;
      this.#nombre = nombre;
      this.#precio = precio;
    }
    get codigo() {
        return this.#codigo;
    }

    set codigo(newAlto) {
        this.#codigo = newAlto;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(newAncho) {
        this.#nombre = newAncho;
     }

     get precio() {
        return this.#precio;
    }

    set precio(newAncho) {
        this.#precio = newAncho;
     }
  
    imprimirDatos() {
      document.write(`<p>Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}</p>`);
    }
    
}
  
let primerProducto = new Producto ('111', 'producto1', 150);
let segundoProducto = new Producto ('222', 'producto2', 200);
let tercerProducto = new Producto ('333', 'producto3', 350);

let arrayProductos = [primerProducto, segundoProducto, tercerProducto];

document.write('<h2>Productos</h2>')
primerProducto.imprimirDatos();
segundoProducto.imprimirDatos();
tercerProducto.imprimirDatos();