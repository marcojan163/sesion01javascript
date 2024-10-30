// declaracion de variables
const valorPi = 3.14

let radio = 0
let altura = 0

let volume = 0

altura = parseInt(prompt("ingresa la altura del cilindro")) 


radio = parseInt(prompt("ingresa la altura el radio")) 


if(radio === 0){
    alert("los valores no deben ser Cero")
} else {
    if(altura === 0){
        alert ("los valores no deben ser cero")
    } else {
        volume = valorPi * (radio * altura)
        console.log ("el valor del volumen es "+ volume)
    }
}