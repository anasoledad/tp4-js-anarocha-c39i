/* 1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto. */


let auto = {
    
    marca: 'Fiat',
    modelo: 'Cronos',
    color: 'Rojo',
    
    //metodos
    
    encender: ()=>{document.write(`<p>El auto está encendido</p>`);},
    apagar: ()=>{document.write(`<p>El auto está apagado</p>`);}
}

document.write('Marca: ' + auto.marca);
document.write('<br>Modelo: ' + auto.modelo);
document.write('<br>Color: ' + auto.color);

auto.encender();
auto.apagar();