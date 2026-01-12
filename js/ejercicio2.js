// Tipos de datos en Java Script

// Personalización de salidas a Consola
//const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
//const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;

console.log("%cEjercicio 02: Tipos de Datos ",style_console);

// 1. Undefined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.warn("1.- UNDEFINED (No Definido)")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

/* En JavaScript exisre el metodo typeof() que nos devuelve el tipo de dato de una variable 
preficalmente declarada*/

console.log("Tipos de dato de las variables declaradas : ");
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

//Supongamos que un usuario denominado Jonhy Neri se ha logueado exitosamente, el valor de la variable 
// deberá de actualizarse a su username
 usuarioLogeado = "Jonhy-Neri";

//pero no solo cambiará su valor, tambien cambiará su tipo de dato a STRING
console.log(`El valor de la variable usuarioLogueado es : ${usuarioLogeado} y su nuevo tipo de dato es: ${typeof(usuarioLogueado)}`);


//2. Boolean 
var hayUsuarioLogeado = true;
/* Supungamos que nuestra app tendrá menu especifico para los usuarios registrados, en el podrán 
visualizar sus mensajes o estados de sus publicaciones de renta o venta de propiedades, a diferencia
de un usuario que entra de mandera incognita a visualizar las propiedades*/
function validacionUsuariosLogueados() {
    console.log(`El valor de la variable hayUsuariosLogueados es : ${hayUsuariosLogueados} que es de tipo: ${typeof(hayUsuariosLogueados)}`);

    if (hayUsuariosLogueados === true) {
        console.log("Dado que se ha logueado un usuario la app mostrará el menú de usuario.");
    } else if (!hayUsuariosLogueados) {
        console.log("Dado que no hay usuarios logueados la app no mostrará el menu de usuario.");
    } else {
        console.log("No puedo procesar ese tipo de dato, requiero de un booleano.");
    }
}

//test1: usuario logueado = true

hayUsuariosLogueados = true;
console.log("Test 1");
validacionUsuariosLogueados();

//test2: usuario logueado = false
hayUsuariosLogueados = false;
console.log("Test 2");
validacionUsuariosLogueados();

//test3: usuario logueado = undefined
hayUsuariosLogueados = 52.5;
console.log("Test 3");
validacionUsuariosLogueados();

// 3. Number (enteros y decimales)
console.warn("3.- NUMBER (Numerico)");
/* Es iimportante saber que Java Script a diferencia de otros lenguajes, no diferencia los datos de tipo numerico, 
lo que para otro lenguajes de programacion lo que un ENTERO (Int), Flotante (Float), DECIMAL, DOBLE (Double) pera el
solo son numeros */

let userID_Owner = 777
let pricePropety = 1250000.50
let latGPS = 20.240508
let longGPS = -97.052881
let altGPS = 1100

console.log(`Los valores de las variables declaradas para los datos de la propiedad son: ID del Usuario = ${userID_Owner},
    Precio de la propiedad = ${pricePropety},
    Latitud (GPS) = ${latGPS},
    Longitud (GPS) = ${longGPS}, 
    Altitud (GPS) = ${altGPS}`);

console.log(`Los tippos de datos de las variables declaradas para los datos de la propiedad son: ID del Usuario = ${userID_Owner},
    Precio de la propiedad = ${pricePropety},
    Latitud (GPS) = ${latGPS},
    Longitud (GPS) = ${longGPS}, 
    Altitud (GPS) = ${altGPS}`);