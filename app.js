const person = {
    name: 'Sebastian',
    age: '23',
    district: 'Comas',
    phone: '914922934' ,
    address:{
        calle: 'jiron',
        nombre_calle: 'libertad',
        numero: '870',
        referencia:{
            detalles: 'a la vuelta de la av. tupac amaru'
        }
    }
};
console.log(person);
const {name, age, district, address:{calle, nombre_calle, referencia:{detalles}}} = person;
console.log(name);
console.log(age);
console.log(district);
console.log(calle);
console.log(nombre_calle);
console.log(detalles);

// Vamos a freezear el objeto (no permite agregar ni eliminar ni nada)
// Object.freeze(person);

// console.log(person.name);
// person.name = 'Jose';
// console.log(person.name)
// person.lastName = 'Giron';
// console.log(person);
// delete person.phone;
// console.log(person);

// Vamos a sealear el objeto (no permite agregar pero si modificar)
// Object.seal(person);

//destructuracion de data
// const {name, age, address: {calle, numero}} = person;
// console.log(name);
// console.log(age);
// console.log(calle);
// console.log(numero);

//Suma de objetos

// const detallesPerson = {
//     jobTitle: 'Frontend',
//     Pais: 'Peru'
// }
//se declara una variable para poder sumar los objetos
// const infoPersona = Object.assign(person, detallesPerson);
// console.log(infoPersona);
// const infoPersona2 = {...person, ...detallesPerson};
// console.log(infoPersona2);