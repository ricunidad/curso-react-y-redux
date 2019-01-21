
export const nombreTarea = "Pasear al perro"


// Escribir classes

export default class Tarea {
    constructor(nombre, prioridad){
        this.nombre  = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

/*

// crear los objetos
let tarea1 = new Tarea('Aprendiendo JavaScript', 'Alta');
let tarea2 = new Tarea('Preparar Cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'Media');
let tarea4 = new Tarea('conoser a mis suegros', 'Baja');


//console.log(tarea1.mostrar());
//console.log(tarea2.mostrar());
//console.log(tarea3.mostrar());
//console.log(tarea4.mostrar());


// Compras

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
//console.log(compra1.mostrar());
*/