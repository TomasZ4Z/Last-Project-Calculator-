//Tu calculadora contendrá funciones para todos los operadores matemáticos básicos que suelen encontrarse
//  en calculadoras, así que empieza creando funciones para los siguientes elementos y pruébalas en la consola de tu navegador:

//sumar
//restar
//multiplicar
//dividir
// Tu calculadora contendrá funciones para todos los operadores matemáticos básicos que suelen encontrarse 
// en calculadoras, así que empieza creando funciones para los siguientes elementos y pruébalas en la consola de tu navegador:


function mathematicalOperation(num1,operator,num2){
if (typeof num1=="number" && typeof num2=="number" && operator === "+") {
    return num1 + num2
}
else if (typeof num1=="number" && typeof num2=="number" && operator === "-") {
    return num1 - num2
}
else if (typeof num1=="number" && typeof num2=="number" && operator === "x") {
    return num1 * num2
}
else if (typeof num1=="number" && typeof num2=="number" && operator === "%") {
    return num1 / num2
}
}
console.log(mathematicalOperation(10,"%",5))






const firstValue = document.querySelector("#user")


const result = document.createElement("div")
result.textContent = "hola"
document.body.appendChild(result)

function prueba(valor){
 console.log('valor recibido es :', valor)
}

equal = document.getElementById("equal")
equal.addEventListener("click", () => {
data = document.getElementById("user").value
prueba(data)
let separacion = data.split("")
console.log(separacion)
})
let nombre = "thomas558+7"


function array(){
    
}








