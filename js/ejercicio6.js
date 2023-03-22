/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */


class Libro{
    #ISBN;
    #titulo;
    #autor;
    #numeroDePaginas;
    constructor(ISBN, titulo, autor, numeroDePaginas){
        this.#ISBN = ISBN;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numeroDePaginas = numeroDePaginas;
    }

    get ISBN() {
        return this.#ISBN;
    }

    set ISBN(newISBN) {
        this.#ISBN = newISBN;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(newTitulo) {
        this.#titulo = newTitulo;
     }

     get autor() {
        return this.#autor;
    }

    set autor(newAutor) {
        this.#autor = newAutor;
    }

     get numeroDePaginas() {
        return this.#numeroDePaginas;
    }

    set numeroDePaginas(newNumeroDePaginas) {
        this.#numeroDePaginas = newNumeroDePaginas;
     }
     mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numeroDePaginas}.</p>`);
     }

}

document.write('<h2>Información de libros</h2>')
let libro1 = new Libro ('85885', 'Las chicas de alambre', 'Jordi Sierra', 256);
libro1.mostrarLibro();
let libro2 = new Libro ('56699', 'Rayuela', 'Julio Cortazar', 728);
libro2.mostrarLibro();

if(libro1.numeroDePaginas>libro2.numeroDePaginas){
    document.write(`El libro ${libro1.titulo} tiene la mayor cantidad de páginas.`);
}else if(libro2.numeroDePaginas>libro1.numeroDePaginas){
    document.write(`El libro ${libro2.titulo} tiene la mayor cantidad de páginas.`);
}else{
    document.write('Los libros tienen igual cantidad de páginas');
}