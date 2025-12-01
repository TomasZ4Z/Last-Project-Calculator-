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




option = ""
let separacion = undefined;

const equal = document.getElementById("equal")
equal.addEventListener("click", () => {
data = document.getElementById("user").value
  console.log(separacion = data.split(option))
  nume1 = parseFloat(separacion[0]) 
  nume2 = parseFloat(separacion[1])
  console.log("suma prueba", mathematicalOperation(nume1,option,nume2))

  
result.textContent = mathematicalOperation(nume1,option,nume2)

})

const add = document.getElementById("add")
add.addEventListener("click", () => {
data1 = document.getElementById("user").value+="+"
separacion = data1
option = "+"

})

const rest = document.getElementById("rest")
rest.addEventListener("click", () => {
data2 = document.getElementById("user").value+="-"
separacion = data2
option = "-"

})

const multi= document.getElementById("multi")
multi.addEventListener("click", () => {
data3 = document.getElementById("user").value+="x"
separacion = data3
option = "x"
})

const divide = document.getElementById("divide")
divide.addEventListener("click", () => {
data4 = document.getElementById("user").value+="%"
separacion = data4
option = "%"
})

const clean = document.getElementById("clean")
clean.addEventListener("click", () => {
cleanData = document.getElementById("user").value = ""
separacion = cleanData
result.textContent = ""
})


const changeOfOperator = document.createElement("user")
document.body.appendChild(changeOfOperator)
changeOfOperator.textContent = ("buenas")




const result = document.createElement("div")
document.body.appendChild(result)


