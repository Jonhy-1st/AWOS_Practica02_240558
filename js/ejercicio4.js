//Estilización de la barra zona de pruebas en el Devtools en el navegador 
console.log ("%cEjercicio 04 Objetos", style_console);

console.warn("1. Propiedades de in Objeto")

let propertyID = 1; 
let propertyName = "Departamento en el Centro de Ciudad de México";
let propertyDescription = "Hermoso departamento de 3 recámaras, 1 baño y 1 cajón de estacionamiento ubicado en el Centro de ciudad de México, ubicado en un tercer piso."
let propertyType = "D";     //H: House D: Departament T: Terrain L: Locale W: Warehouse C: Cabain
let propertyIsSaleable = false; //Se vende?
let propertyIsRentable = true; //Se renta?

let propertyPrice = 7500.00;
let propertyLat = 19.428313;
let propertyLong = -99.1020177;
let propertyToken = Symbol("D-12558-CDMX-MX5");
let propertyIncludedServices = ["Agua","Luz","Gas"];
let propertyImage = null
let propertyOwnerID = 32412
let propertyStatus = "Good"

console.log (`Datos de la propiedad en RENTA:
    Nombre: ${propertyName}
    Descripción: ${propertyDescription}
    Precio: ${propertyPrice}
    Ubicación:  Latitud: ${propertyLat}    Longitud: ${propertyLong}
    Servicios incluidos: ${propertyIncludedServices}
    En Renta: ${propertyIsRentable}
    En Venta: ${propertyIsSaleable}
    Token: ${propertyToken.description}
    Dueño: ${propertyOwnerID}
    Imagen: ${propertyImage}`);


//2. Decalración de un objeto 
/* Para declarar un objeto de JS es necesario asignarle un nombre y todas sus propiedades
irán entre () y separadas por coma en el orden clave*/
console.warn("Declaración de un objeto")
property1 = {
    id: 1,
    name: "Departamento en el Centro de Ciudad de México",
    description: "Hermoso departamento de 3 recámaras, 1 baño y 1 cajón de estacionamiento ubicado en el Centro de ciudad de México, ubicado en un tercer piso.",
    type: "D",
    price: 7500.00,
    isRentable: true,
    isSaleable: false,
    icludedServices: ["Agua","Luz","Gas"],
    lat: 19.428313,
    long: -99.1020177,
    token: Symbol("D-12558-CDMX-MX5"),
    imagen: null,
    ownerID:  32412,
    status: "Good",
}

console.table(property1);

/*3. Leyendo las propiedades de un objeto
Un objeto es un conjunto de variables que abstraen una entidad fisica o conceptual 
de la que es significativo almacenar información para el programa o sistema que estamos 
desarrollando.

Para acceder a las propiedades individuales basta con poner el nombre del objeto un "." 
y el nombre de la propiedad.
*/

console.warn("3. Lectura de Propiedades de un objeto");

console.log(`El usuario con id: ${property1.ownerID}, está rentando un: ${property1.name}
    el cual se describre cómo: ${property1.description} por un precio de: ${property1.price} 
    con los servicios de : ${property1.icludedServices} ${property1.isSaleable?", actualmente está a la venta " :
         "que por el momento no esta a la venta"}`);

//4. Modificación de los valores de las propiedades de un objeto 
/*Para modificar los datos de una variable basta con acceder a la propiedad deseada a
modificar y asignarle su nuevo valor a traves del signo = 
 */

property1.price= 8200.00
property1.isSaleable = true
property1.icludedServices = ["Agua", "Luz", "Gas", "Internet", "Segiridad Privada"];

console.warn("4. Modificar propiedades de un Objeto");

console.log(`El usuario con id: ${property1.ownerID}, está rentando un: ${property1.name}
    el cual se describre cómo: ${property1.description} por un precio de: ${property1.price} 
    con los servicios de : ${property1.icludedServices} ${property1.isSaleable?", actualmente está a la venta " :
         "que por el momento no esta a la venta"}`);


// Destrucción de Objetos (OBJECT DESTRUCTURING)
/* JavaScript es un lenguaje dinámico que permite que un objeto previamente definido pueda se
descompuesto en pequeñas 
 */


// Definición de Usuarios
user1 = {
    userID : 32412,
    name: "Luis mua",
    email: "luismua@mail.com",
    createAt: new Date("2015/01/30T15:08:59"),
    lastLogin: new Date("2026/01/20T20:10:05"),
    userRole: "Vendedor",
    totalProperties: 12,
    rating: 9.5
}

user2 = {
    userID : 240558,
    name: "Jonhy Neri",
    email: "jonhy@mail.com",
    createAt: new Date("2016/07/04T16:10:01"),
    lastLogin: new Date("2026/01/20T18:00:05"),
    userRole: "Comprador",
    rating: 9.6,
    lastOperation: "Buscando Departamento para renta"
}

user3 = {
    userID : 240559,
    name: "Carlos Reyes",
    email: "carlos@mail.com",
    createAt: new Date("2016/06/14T11:18:56"),
    lastLogin: new Date("2026/01/20T18:30:05"),
    userRole: "Comprador",
    rating: 9.3,
    lastOperation: "Buscando Departamento para renta"
}

user4 = {
    userID : 240560,
    name: "Pablo Cazares",
    email: "pabloC@mail.com",
    createAt: new Date("2016/06/20T18:18:00"),
    lastLogin: new Date("2026/01/20T14:35:05"),
    userRole: "Comprador",
    rating: 9.3,
    lastOperation: "Buscando Departamento para renta"
}


console.warn("5. Destrucción de objetos")

const buyerBid = (seller, buyer, property, price_bidded) => {

    const{userID: sellerID , email: sellerEmail} = seller;
    const{userID: buyerID , email: buyerEmail} = buyer;
    const {price,id} = property;
    const fecha_oferta = new Date();

    // CORRECCIÓN 1: Se cambió Date por fecha_oferta.toLocaleString()
    console.log(`El usuario: ${buyerID} esta realizando una oferta al usuario: ${sellerID} 
        por la cantidad de : ${price_bidded} por la propiedad ${id} con fecha: ${fecha_oferta.toLocaleString()}`);

        return {
            buyerID,
            sellerID,
            propertyID: id,
            propertyPrice: price,
            date_bidden: fecha_oferta,
            // CORRECCIÓN 2: Se quitó Math.round y se usó toFixed(2) para porcentajes reales
            bid_acurrate: ((price_bidded / price) * 100).toFixed(2) + "%"
        }

}

//Test 1. El usuario 2 realiza una oferta de 7500
let bid1 = buyerBid(user1, user2, property1, 7500);
console.log(`La oferta tiene una exactidud del: ${bid1.bid_acurrate}`)

//Test 2. El usuario 2 realiza una oferta de 8200
let bid2 = buyerBid(user1, user3, property1, 8200);
console.log(`La oferta tiene una exactidud del: ${bid2.bid_acurrate}`)

//Test 3. El usuario 2 realiza una oferta de 10000
let bid3 = buyerBid(user1, user4, property1, 10000);
console.log(`La oferta tiene una exactidud del: ${bid3.bid_acurrate}`)