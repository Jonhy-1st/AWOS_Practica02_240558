//Estilización de la bara zoba de pruebas enel DevTools en el navegador 
console.log("%cEjercicio 03: Funciones",style_console);

// 1. Funciones procedurales , vacias, VOID, sin valor de retorno y sin parámetros de entrada 

function saludar(){
    console.log("Bienvenido al sistema de Bienes Raices ");
}
console.warn("1. Funcine sin valor, sin retorno ");
saludar();

//2. Funciones procedurales sin valor de retorno, pero que si recibe parámetros es decir datos de entrada 

function saludar_usuario(username, gender){
    if(gender=="H")
        console.log(`Bienvenido, ${username} sistema de Bienes Raices`)

    else if (gender=="M")
        console.log(`Bienvenida, ${username} sistema de Bienes Raices`)

    else
        console.log(`Bienvenid@, ${username} sistema de Bienes Raices`)
}

console.warn("2. Funciones sin valor de retorno, con parametros de entrada")
saludar_usuario("Jonhy", "H");
console.log("-----------------------------------------------------")
saludar_usuario("Luista", "M");
console.log("-----------------------------------------------------")
saludar_usuario("Guadalupe", null);

//3. Funciones que retornan un dato, pero no reciben parametro

function fechaActual(){
const fecha = new Date();
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX;
};

console.log ("3. Funciones que retornan un dato, pero no reciben parametros")
let hoy =fechaActual();
console.log(`Bienvenido al sistema de Bienes Raices, hoy es: ${hoy}`);

/*Imprimiendo el valor y que tipo de dato es 
*/
console.log(fechaActual);
console.log(typeof(fechaActual));
// 4. Funciones que retornan un valor y que reciben parametros de entrada

function login(username, password){
    let userValidation= false;
    if(username==="admin"&&password==="12345"){
        userValidation= true;
        console.log ("Bienvenido usuario admin!")
}
    else if (username==="admin" && password!="12345"){
        userValidation= false;
        console.log ("Lo sentimos la contraseña es incorrecta")
    }
    else if (username!="admin" && password==="12345"){
        userValidation= false;
        console.log ("Lo sentimos el usuario no existe")
    }
    else if (username!="admin" && password!="12345"){
        userValidation= false;
        console.log ("Verifique el nombre de usuario y contraseña")
    }
    return userValidation;
}

 console.warn("4. Funciones que retornan un dato, pero también reciben parametros de entrada")
 var loginStatus;

 
 //Test 1 - usuario y contraseña correctos
 console.log("Test 1. - usuario:admin, password 12345");
 var loginStatus= login ("Admin", "12345");
 console.log(
    `${loginStatus? `El usuario admin se ha logeado exitosamente` : `Hubo un error en el login de usuario admin`}`);
 //Test 2 - usuario incorrecto y contraseña correcta
 console.log("Test 2. - usuario:administrador, password 12345 ");
 var loginStatus= login ("Administrador", "12345");
 console.log(
    `${loginStatus? `El usuario admin se ha logeado exitosamente` : `Hubo un error en el login de usuario admin`}`);
  //Test 3 - usuario y contraseña correctos
 console.log("Test 3. - usuario:administrador, password 1234523 ");
  var loginStatus= login ("Administrador", "1234523");
 console.log(
    `${loginStatus? `El usuario admin se ha logeado exitosamente` : `Hubo un error en el login de usuario admin`}`);
  //Test 1 - usuario y contraseña correctos
   console.log("Test 4. - usuario:Jonhy, password 12345 ");
  var loginStatus= login ("Jonhy", "12345");
 console.log(
    `${loginStatus? `El usuario admin se ha logeado exitosamente` : `Hubo un error en el login de usuario admin`}`);

//Funciones anonimas, funciones flecha (Arrow), funciones lambda 
/*A diferencia dela funciones nombradas este tipo de funciones no suelebn ser reutilizadas en el codigo 
solo se ejecutan una sola vez, dando velocidad, individualidad y privacidad a los datos utilizados en el proceso*/

//5. Función anónima sin parámetros 
isNewUser = function(){
const hoy = new Date ();

return(
    lastLogin.getFullYear() ===hoy.getFullYear() &&
    lastLogin.getMonth() ===hoy.getMonth() &&
    lastLogin.getDate() ===hoy.getDate() 
    );
};

console.warn("5. Funciones Anónimas, sin parametros ");

console.log ("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`Fecha del ultimo acceso es: ${lastLogin}`);
console.log (`El usuario logeado es: ${isNewUser? "Nuevo usuario": "Usuario antiguo."}`);


console.log("----------------------------------------------------");
lastLogin= new Date ("2025/12/31");
console.log("Test 2 - Fecha de acceso diferente a la fecha de hoy");
console.log(`La fecha del ultimo acceso es: ${lastLogin}`);
console.log (`El usuario logeado es: ${isNewUser? "Nuevo usuario": "Usuario antiguo."}`);


