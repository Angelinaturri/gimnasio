

// function sumar() {
//     let numeroA = parseInt(prompt("Ingrese el primer numero"))
//     let numeroB = parseInt(prompt("Ingrese el segundo numero"))
//     let resultado = numeroA + numeroB 
//     alert(numeroA + " + " + numeroB + " = " + resultado)
// }
const sumar = (numeroA, numeroB) => numeroA+numeroB
// function restar() {
//     let numeroA = parseInt(prompt("Ingrese el primer numero"))
//     let numeroB = parseInt(prompt("Ingrese el segundo numero"))
//     let resultado = numeroA - numeroB 
//     alert(numeroA + " - " + numeroB + " = " + resultado)
// }
const restar = (numeroA, numeroB) => numeroA-numeroB
// function multiplicar() {
//     let numeroA = parseInt(prompt("Ingrese el primer numero"))
//     let numeroB = parseInt(prompt("Ingrese el segundo numero"))
//     let resultado = numeroA * numeroB 
//     alert(numeroA + " * " + numeroB + " = " + resultado)
// }
const multiplicar = (numeroA, numeroB) => numeroA*numeroB

// function dividir() {
//     let numeroA = parseInt(prompt("Ingrese el primer numero"))
//     let numeroB = parseInt(prompt("Ingrese el segundo numero"))
//     let resultado = numeroA / numeroB 
//     alert(numeroA + " / " + numeroB + " = " + resultado)
// }
const dividir = (numeroA, numeroB) => numeroA/numeroB

let menu = parseInt(prompt("Ingrese la opcion que desee: n/ 1- Sumar n/ 2-Restar n/ 3-Multiplicar n/ 4-Dividir n/ 5- Salir"))
while (menu != 5) {
        let numeroA = parseInt(prompt("Ingrese el primer numero"))
        let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    switch (menu) {
        
        case 1:
            sumar()
            let resultadoSuma = numeroA + numeroB
            alert("Su resultado es: " + resultadoSuma)
            break
        case 2:
            restar()
            let resultadoResta = numeroA - numeroB
            alert("Su resultado es: " + resultadoResta)
            break
        case 3:
            multiplicar()
            let resultadoMultiplicar = numeroA * numeroB
            alert("Su resultado es: " + resultadoMultiplicar)
            break
        case 4:
            dividir()
            let resultadoDividir = numeroA / numeroB
            alert("Su resultado es: " + resultadoDividir)
            break
        default:
            alert("Opcion incorrecta")

            break
    }
    menu = parseInt(prompt("Ingrese la opcion que desee: n/ 1- Sumar n/ 2-Restar n/ 3-Multiplicar n/ 4-Dividir n/ 5- Salir"))
}
