//Tu calculadora contendrá funciones para todos los operadores matemáticos básicos que suelen encontrarse
//  en calculadoras, así que empieza creando funciones para los siguientes elementos y pruébalas en la consola de tu navegador:

//sumar
//restar
//multiplicar
//dividir
// Tu calculadora contendrá funciones para todos los operadores matemáticos básicos que suelen encontrarse 
// en calculadoras, así que empieza creando funciones para los siguientes elementos y pruébalas en la consola de tu navegador:
 
 

function mathematicalOperation(num1,operator,num2){
if (typeof num1=="number" && typeof num2=="number" && operator == "+") {
    return num1 + num2
}
else if (typeof num1=="number" && typeof num2=="number" && operator == "-") {
    return num1 - num2
}
else if (typeof num1=="number" && typeof num2=="number" && operator == "x") {
    return num1 * num2
}
else if (typeof num1=="number" && typeof num2=="number" && operator == "/") {
    return num1 / num2
}

}
console.log(mathematicalOperation(10,"/",5))


function extraValue (sum, operator,num3){
if (typeof sum=="number" && typeof num3=="number" && operator == "+") {
    return sum + num3
}
else if (typeof sum=="number" && typeof num3=="number" && operator == "-") {
    return sum - num3
}
else if (typeof sum=="number" && typeof num3=="number" && operator == "x") {
    return sum * num3
}
else if (typeof sum=="number" && typeof num3=="number" && operator == "/") {
    return sum / num3
}

}



const firstValue = document.querySelector("#user")




option = ""
option2 = "+"

let separacion = undefined;
let coco = undefined;
const equal = document.getElementById("equal")
equal.addEventListener("click", () => {
data = document.getElementById("user").value
  console.log(separacion = data.split(option))
  nume3 = data.split(option2[1])
  nume1 = parseFloat(separacion[0]) 
  nume2 = parseFloat(separacion[1])
  nume3 = parseFloat(separacion[2])   
  console.log("suma prueba", mathematicalOperation(nume1,option,nume2))
if (!separacion[2]) {
result.textContent = mathematicalOperation(nume1,option,nume2)
}

else {
all = mathematicalOperation(nume1,option,nume2)
result.textContent = extraValue(coco,option2,nume3)
}
 
})

function total(){ 

data = document.getElementById("user").value
coco = data.split(option)
nume1 = parseFloat(separacion[0]) 
nume2 = parseFloat(separacion[1])
return  mathematicalOperation(nume1,option,nume2)


}




const add = document.getElementById("add")
add.addEventListener("click", () => {
data1 = document.getElementById("user").value+="+"
separacion = data1
option = "+"
option2 = "+"
loco = total()
console.log (loco)
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
data4 = document.getElementById("user").value+="/"
separacion = data4
option = "/"
})

const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
clearData = document.getElementById("user").value = ""
separacion = clearData
result.textContent = ""
})

const deletelastOne = document.getElementById("deletelastOne")
deletelastOne.addEventListener("click", () => {
last = document.getElementById("user")
last.value = last.value.slice(0,-1) 

})




const changeOfOperator = document.createElement("user")
document.body.appendChild(changeOfOperator)
changeOfOperator.textContent = ("buenas")




const result = document.createElement("div")
document.body.appendChild(result)


