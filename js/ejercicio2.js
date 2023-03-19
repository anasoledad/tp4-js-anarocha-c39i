/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.*/

let cuenta = {
    titular: 'Alex',
    saldo: 0,

    ingresar: function(){
        let cantidadDinero = parseFloat(prompt('Ingrese el monto de dinero'));
        this.saldo += cantidadDinero;
        alert('Operación exitosa');
    },
    extraer: function(){
        let cantidadExtraccion = parseFloat(prompt('Ingrese el monto a extraer'));
        if (this.saldo>=cantidadExtraccion){
            this.saldo -= cantidadExtraccion;
            alert('Operación exitosa');
        }else {
            alert('Saldo insuficiente');
        }
        
    },
    informar: function(){
        alert('Titular de cuenta: '+ this.titular +'\nSaldo Actual: '+this.saldo);  
    }
}

do{

let opcionSeleccionada = parseInt(prompt('Menu Principal \n\n Seleccione el número de la operación que desea realizar \n\n 1- Agregar dinero \n 2- Extraer  dinero \n 3-Estado de cuenta'))
 
switch(opcionSeleccionada){
    case 1: 
        cuenta.ingresar();
        // cuenta.informar();
        break;
    case 2:
        cuenta.extraer();
        // cuenta.informar();
        break;
    case 3:
        cuenta.informar();
        break;
    default:
        alert('Opción erronea');
}

}while(confirm('¿Desea hacer otra operación?'));
