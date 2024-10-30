let rNum = Math.floor(Math.random() * 20) 
let numero = 0
let estado = false
console.log("numero a buscar" + rNum )
numero = parseInt(prompt("Pruebe suerte, ingrese un numero menor a 20 " +rNum));

do {
    
    if (rNum===numero){
        estado = true
        console.log("ganaste")
        console.log("estado " + estado)
    } else {
        numero = parseInt(prompt("intenta nuevamente"))
        console.log("estado "+ estado)
    }
}while (estado === false);



