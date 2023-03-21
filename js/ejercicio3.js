/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área.*/

class Rectangulo {
    #alto;
    #ancho;
    constructor (alto, ancho) {
      this.#alto = alto;
      this.#ancho = ancho;
    }

    get alto() {
        return this.#alto;
    }

    set alto(newAlto) {
        this.#alto = newAlto;
    }

    get ancho() {
        return this.#ancho;
    }

    set ancho(newAncho) {
        this.#ancho = newAncho;
     }

    get perimetro(){
        return this.calcPerimetro();
    }
    get area() {
       return this.calcArea();
     }
  
    mostrar(){
        document.write('<h2>Rectágulo</h2>')
        document.write(`
        <ul>
        <li>Alto: ${this.alto}</li>
        <li>Ancho: ${this.ancho}</li>
        </ul>
        `);
    }
    calcArea() {
      return this.alto * this.ancho;
    }
    calcPerimetro(){
        return 2*(this.alto +this.ancho);
    }
  }
  
  let rectangulo1 = new Rectangulo(5, 10);
  rectangulo1.mostrar()
  document.write(`<p>Perimetro: ${rectangulo1.perimetro}</p>`); 
  document.write(`<p>Area: ${rectangulo1.area}</p>`);

  let rectangulo2 = new Rectangulo(6, 13);
  rectangulo2.mostrar()
  document.write(`<p>Perimetro: ${rectangulo2.perimetro}</p>`); 
  document.write(`<p>Area: ${rectangulo2.area}</p>`);

  let rectangulo3 = new Rectangulo(6, 13);
  rectangulo3.mostrar()
  document.write(`<p>Perimetro: ${rectangulo3.perimetro}</p>`); 
  document.write(`<p>Area: ${rectangulo3.area}</p>`);
 

  rectangulo1.alto = 30;
  rectangulo1.ancho = 2;
  rectangulo1.mostrar()
  document.write(`<p>Perimetro: ${rectangulo1.perimetro}</p>`); 
  document.write(`<p>Area: ${rectangulo1.area}</p>`);
