var numero = 0
var factorial = 0
var i = 1

numero = parseInt(prompt("ingrese Numero de Factorial")) 

while (i<=numero){
    console.log(i)
    console.log (typeof(factorial) )
    factorial = factorial * i
    i= i+1
    console.log(factorial)
}
console.log(factorial)
