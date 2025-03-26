// primer unidad 
// let nombre = "angelina"
// let edad = "24"
// const nacimiento = "2000"

// console.log(nombre)
// console.log(edad)
// console.log(nacimiento)

// segunda unidad

// let peso = 100
// if (peso >= 90) {
//     console.log("guaa que fuerza tienes!");
// } else if (peso >= 60) {
//     console.log("vamos! tu puedes! ");
// } else {
//     console.log("recien comienzas, ya lo vas a lograr!");
// }

//condicionales y operadores
// podemos utilizarlo para cuando se hace la inscripcion del curso, ejemplo no puede entrar gente mayor a 35 ni menos a 18)
//true si la edad esta entre 18 y 30
// let edad = 40
// let acceso = (edad >= 18) && (edad <= 35);
// console.log(acceso); 

//ahora lo mismo pero de otra manera
// true si la edad es menor q 18 y 35 
// let temp = 15
// let adver = (temp < 18) || (temp > 35);
// console.log(adver);

//ciclos por repeticion for

// for(let i = 0; i < 5; i++) {
//     console.log("hola mundo")
// }
// //ciclos condicionales es el while (quiere que decir MIENTRAS el password ingresado sea diferente nos va a pedir la contraseña)

// const password = "1234";

// let passwordIngresado = prompt("ingrese la contrasena");

// while(passwordIngresado != password) {
//     passwordIngresado = prompt("ingresa la contrasena");
// }

// const usuarios = [
//     {nombre: "ana", edad: 20, altaPsico: true},
//     {nombre: "luis", edad: 15, altaPsico: false},
//     {nombre: "alberto", edad: 58, altaPsico: false}
// ]
// let usuarios = prompt("ingrese su edad");
// let altaPsico = prompt("hizo su alta psicologica?");

// for(let i = 0; i < usuarios.length; i++ ){
//     if(usuarios[i].edad >= 18 && usuarios[i].altaPsico) {
//         console.log(usuarios[i].nombre)
//     }
// }

// // //si no tuviera el break seria 5 y no 4// si yo cambio el i === 10 no deja de reproducirse, que seria salir del ciclo 
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//             break; // Sale del ciclo cuando i es igual a 5
//         }

//     console.log(i); // Imprime los números de 0 a 4
// }

//si esta el continue se hace numeros pares, si esta es numeros impares.
// no entiendo porque es estrictamente igual a 0 , que pasa si es estrictamente igual a 0

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0)  {
//                 continue; // Omite los números pares, EJ; necesito otro ejemplo de esto
//             }
           
//     console.log(i); // Imprime los números impares entre 0 y 9
// }


// let edad = prompt("ingrese su edad ")


// if (edad >= 18) {
//     alert("haz ingresado al nuevo gimnasio, bienvenido!");
// } else {
//     alert("Oh, que lastima no atendemos a menores de edad!");
// } 




