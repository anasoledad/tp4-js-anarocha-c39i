/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación. 
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNacimiento = anioNacimiento;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(newNombre) {
        this.#nombre = newNombre;
     }
    get edad() {
        return this.#edad;
    }

    set edad(newEdad) {
        this.#edad = newEdad;
    }

     get dni() {
        return this.#dni;
    }

    set dni(newDni) {
        this.#dni = newDni;
     }
     get sexo() {
        return this.#sexo;
    }

    set sexo(newSexo) {
        this.#sexo = newSexo;
     }

     get peso() {
        return this.#peso;
    }

    set peso(newPeso) {
        this.#peso = newPeso;
     }

     get altura() {
        return this.#altura;
    }

    set altura(newAltura) {
        this.#altura = newAltura;
     }
     get anioNacimiento() {
        return this.#anioNacimiento;
    }

    set anioNacimiento(newAnioNacimiento) {
        this.#anioNacimiento = newAnioNacimiento;
     }

    mostrarGeneración(){
        switch(true){
            case this.anioNacimiento>=1994 && this.anioNacimiento<=2010:
                document.write('<p>Nombre de la generación: Generación Z</p>');
                document.write('<p>Rasgos característicos: Irreverencia</p>');
                break;
            case this.anioNacimiento>=1981 && this.anioNacimiento<=1993:
                document.write('<p>Nombre de la generación: Generación Y</p>');
                document.write('<p>Rasgos característicos: Frustración</p>');
                break;
            case this.anioNacimiento>=1969 && this.anioNacimiento<=1980:
                document.write('<p>Nombre de la generación: Generación X</p>');
                document.write('<p>Rasgos característicos: Frustración</p>');
                break;
            case this.anioNacimiento>=1949 && this.anioNacimiento<=1968:
                document.write('<p>Nombre de la generación: Baby Boom</p>');
                document.write('<p>Rasgos característicos: Ambición</p>');
                break;
            case this.anioNacimiento>= 1930 && this.anioNacimiento<=1948:
                document.write('<p>Nombre de la generación: Silent Generation</p>');
                document.write('<p>Rasgos característicos: Austeridad</p>');
                break;
        }
    }
    esMayorDeEdad(){
        if (this.edad>=18){
            document.write(`<p>${this.nombre} es mayor de edad</p>`)
        }else{
            document.write(`<p>${this.nombre} es menor de edad</p>`)
        }
    }
    mostrarDatos(){
        document.write('<h2>Datos de una persona</h2>')
        document.write(`
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de Nacimientos: ${this.anioNacimiento}</li>
        </ul>
        `);
    }
    generarDNI(){
        let min = 10000000;
        let max = 99999999;

        return Math.floor(Math.random()*(max-min+1)+min);
    }

}

let persona1 = new Persona ('Valentina', 14, '', 'M', 50, 1.55, 2008);
persona1.dni= persona1.generarDNI();
persona1.mostrarDatos();
persona1.mostrarGeneración();
persona1.esMayorDeEdad();

let persona2 = new Persona ('Irma', 61, '', 'M', 50, 1.55, 1961);
persona2.dni= persona2.generarDNI();
persona2.mostrarDatos();
persona2.mostrarGeneración();
persona2.esMayorDeEdad();


