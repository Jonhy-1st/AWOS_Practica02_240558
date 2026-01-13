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
    Precio de la propiedad = ${typeof(pricePropety)},
    Latitud (GPS) = ${typeof(latGPS)},
    Longitud (GPS) = ${typeof(longGPS)}, 
    Altitud (GPS) = ${typeof(altGPS)}`);

    // 4.- STRING (Cadena de Caracteres)

var fullnameOwner = "Jonhy Neri Hernández";
let nameProperty = "        Hermosa Casa en la Playa de Puerto Vallarta              ";
let descriptionProperty = "Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automóviles a orilla del mar.";
var statusProperty = "Disponible";
const typeProperty = "C";
var addressProperty;

/* Los tipos de datos STRING son palabras, valores cualitativos de las entidades de nuestra 
aplicación, que no tienen un tamaño máximo y que están conformadas por carácteres alfabéticos, 
caracteres especiales como acentos o símbolos de algún idioma*/

console.warn("4. STRING (CADENA DE CARÁCTERES, PALABRAS)");
console.log(`El usuario: ${fullnameOwner}, 
    esta vendiendo o rentando: ${nameProperty}
    que consiste en: ${descriptionProperty}
    actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`)
console.log(`Las variables declaradas son del tipo:
        fullnameOwner :   ${typeof(fullnameOwner)}
        nameProperty :   ${typeof(nameProperty)}
        descriptionProperty:  ${typeof(descriptionProperty)}
        statusProperty :   ${typeof(statusProperty)}
        typeProperty :   ${typeof(typeProperty)}`);

// Manipulando Strings, los tipos de datos cualitativos tienen ciertos métodos para manipular su valor
// por mencionar algunos:

// Transformar a MAYÚSCULAS
console.log(`Nombre del propietario ${fullnameOwner.toUpperCase()}`);
//Transformar en minusculas 
console.log(`Descripción de la Propiedad ${descriptionProperty.toLocaleLowerCase()}`);
//Numero a caracteres
console.log(`Numero de letras en el tipo de propiedad ${typeProperty.length}`);
// Subcadena
console.log(`Apellido del propietario: ${fullnameOwner.slice(6, fullnameOwner.length)}`);
// Eliminar espacios 
console.log(`Nombre de la propiedad: ${nameProperty.trim()}`);
// Reemplazar caracteres
console.log(`Descripción modificada: ${descriptionProperty.replace("MAR", "RIO")}`);
// Reemplazar todos
console.log(`Descripción modificada: ${descriptionProperty.replaceAll("a", "4")}`);

//5. BIGINT (Emntero de grandes dimensiones)

/*Este tipo de dato permite almacenar numeros exageradamente amplios que usualmente aplicaciones
científicas avanzadas requieren, esto para no perder presición en los valores almacenados. */
const numeroGrande = 12134567890;
let numeroGrande2 = 1213456789012134567890;
let numeroGrande3 = 121345678901213456789012134567890;
let numeroGrande4 = 12134567890121345678901213456789012134567890;

console.warn("5.- BIGINT (Enteros de gran tamaño)");
console.log(`El valor de numeroGrande es: ${numeroGrande} y es soportado por: ${typeof (numeroGrande)}`);
console.log(`El valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser soportado por: ${typeof (numeroGrande2)} comienza
a sufrir problemas de presicion`);
console.log(`El valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser soportado por: ${typeof (numeroGrande3)} comienza
a sufrir problemas de presicion`);
console.log(`El valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser soportado por: ${typeof (numeroGrande4)} comienza
a sufrir problemas de presicion`);

numeroGrande2 = BigInt(1213456789012134567890);
console.log(`Si declaramos la variable con Bigint el valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser soportado por: ${typeof (numeroGrande2)} comienza a sufrir problemas de presicion`);
numeroGrande3 = BigInt(121345678901213456789012134567890);
console.log(`Si declaramos la variable con Bigint el valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser soportado por: ${typeof (numeroGrande3)} comienza a sufrir problemas de presicion`);
numeroGrande4 = BigInt(12134567890121345678901213456789012134567890);
console.log(`Si declaramos la variable con Bigint el valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser soportado por: ${typeof (numeroGrande4)} comienza a sufrir problemas de presicion`);

//6. SYMBOL 

/*Es un tipo de dato que ademas de tenr un tipo, un valor, asocia la ubicación del espacio en memoria, por lo que todos los valores
asignados a una variable de este tipo siempre serán UNICOS */

console.warn("6. SYMBOL (Simbolos");

const numero1 = 4;
const numero2 = 4.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(4);
const numero6 = Symbol(4.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");

//Valores y tipos de dato
console.log(`Valores y tipos:
    numero 1 - valor: ${numero1}, Tipo ${typeof(numero1)}
    numero2 - Valor: ${numero2}, Tipo: ${typeof (numero2)}
    numero3 - Valor: ${numero3}, Tipo: ${typeof (numero3)}
    numero4 - Valor: ${numero4}, Tipo: ${typeof (numero4)}
    numero5 - Valor: ${numero5.description}, Tipo: ${typeof (numero5)}
    numero6 - Valor: ${numero6.description}, Tipo: ${typeof (numero6)}
    numero7 - Valor: ${numero7.description}, Tipo: ${typeof (numero7)}
    numero8 - Valor: ${numero8.description}, Tipo: ${typeof (numero8)}`)

//Pruebas comparativas

if(numero1 ==numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero2 no son iguales en valor.")
if(numero1 == numero3)
    console.log("Las variables numero1 y numero3 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero3 no son iguales en valor.")
if(numero1 == numero4)
    console.log("Las variables numero1 y numero4 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero4 no son iguales en valor.")
if(numero1 == numero5)
    console.log("Las variables numero1 y numero5 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero5 no son iguales en valor.")
if(numero5 == numero6)
    console.log("Las variables numero5 y numero6 son igulaes en valor.")
else
    console.log("Las variables numero5 y numero6 no son iguales en valor.")

// 6. NULL (Nulo)

/*El tipo de dato nulo es similar a UNDIFINED, con la variacion de que hay un consentimiento del usuario
o del sistema a que esta variable intencionalmente fue iniciada con este valor */

var isPremiumUser;
var isNewUser; 
var todayDate = new Date();
let lastLogin = todayDate;

console.warn("7. NULL (Nulo)");
console.log(`
    El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate} tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser} tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiumUser} tipo de dato: ${typeof(isPremiumUser)} `);

 
//Validación del usuario

if(todayDate == lastLogin)
    isNewUser=true;
else
    isNewUser=false;

//Como es un usuario nuevo aun no se, ni publica ninguna propiedad por defecto no interesa 
//por el momento que sea premiun hasta que interactue con la plataforma
isPremiumUser=true;
console.log("Datos despues de validacion")
console.log(`
    El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate} tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser} tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiumUser} tipo de dato: ${typeof(isPremiumUser)} `);