//Comentario de una sola linea 

/* comentarios 
    ...
    multilinea
*/


//Ejercicio 01: Declaracion de variables en JavaScript
//1. Utilizando la palabra reservada VAR

//Utilizaremos el metodo WARN para estabilizar las respuestas de la pruebas realizadas a nuestro codigo

console.warn("----Ejercicio 1: Declaracion utilizando el prefijo WARN ----")

var miNombre= "Jonhy";
console.log("El valor almacenado en la variable miNombre es: " + miNombre);

//Modificar el valor de la variable
var miNombre= "Jonhy";
console.log("El valor almacenadod en la variable es: ",miNombre);

var misApellidos;
console.log("El valor almacenado en la variable miApellido es: ",misApellidos); //undefined

//Una variable puede cambiar su valor durante la ejecucion del programa 

console.warn ("----Declaración de variables utilizando el prefijo CONST----")
// 2. Utilizando la palabra reservbada CONST
//Una constante a diferencia de una variable es que su valor no cambiará durante toda la ejecucion del programa

const miMatricula = "240558";
console.log ("El valor almacenado en la constante miMatricula es: ",miMatricula);


//Intentando modificar el valor
//miMatricula= "240559";
//console.warn("El valor almacenado en la constante miMatricula es: ",miMatricula);

// 3. Utilizando la palabra reservada LET
//LET es el prefijo utilizando muy similar a VAR con la diferencia en su alcance (SCOPE),aquellas
//declaradas con VAR tienen un alcance globlal en el codigo importando bloques o seccione, mientras
//que las variables declaradas con let solo existiran dentro del bloque o funcion.

var fecha_nacimiento = new Date("2001-11-28");
var miEdad = calcularEdad(fecha_nacimiento);
console.log ("Tu edad es de : ",miEdad, "años.");



//Verificacion si es mayor de edad
if (miEdad >=18){
    var esMayorDeEdad = true;
    let esMenorDeEdad = false;
}
if(esMayorDeEdad)
    console.log("Eres mayor de edad.");
else
    console.log("Eres menor de edad.");

function calcularEdad(fecha_nacimiento){
    //Para calcular la edad requerimos la fecha del dia de hoy 
    var fechaHoy = new Date();
    
    //Dado a que los datos de fecha son alamacenados en ms por default en JavaScript, necesitamos
    //una variable que nos permita saber el numero de ms por dia 

    let msPorDia = 24*60*60*1000;

    //Ya que tenemos los ms por dia tenemos que restar la fecha de hoy, la fecha en que nacimos 
    //para calcular los ms que hemos vivido 
    let diasVividos = (fechaHoy - fecha_nacimiento)/msPorDia;

     //Invocamos el metodo matematico de la funcion piso (FLOOR)
     var edad = diasVividos /365.25
     edad = Math.floor(edad);

     return edad;

}

//Interpolacion de Datos

// $ {} `
misApellidos = "Neri Hernández";
console.log(`Hola, ${miNombre} ${misApellidos}, actualmente tienes ${miEdad} y mi matricula es ${miMatricula}`);

//Autor: Jonhy Neri Hernández