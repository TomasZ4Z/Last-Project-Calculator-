//Tu calculadora contendrá funciones para todos los operadores matemáticos básicos que suelen encontrarse
//  en calculadoras, así que empieza creando funciones para los siguientes elementos y pruébalas en la consola de tu navegador:

//sumar
//restar
//multiplicar
//dividir
// Tu calculadora contendrá funciones para todos los operadores matemáticos básicos que suelen encontrarse 
// en calculadoras, así que empieza creando funciones para los siguientes elementos y pruébalas en la consola de tu navegador:
 



                       //Primera función
//function extraValue (sum, operator,num3){
//if (typeof sum=="number" && typeof num3=="number" && operator == "+") {
  //  return sum + num3
//}
//else if (typeof sum=="number" && typeof num3=="number" && operator == "-") {
  //  return sum - num3
//}
//else if (typeof sum=="number" && typeof num3=="number" && operator == "x") {
  //  return sum * num3
//}
//else if (typeof sum=="number" && typeof num3=="number" && operator == "/") {
  //  return sum / num3
//}
//}

function mathematicalOperation(num1, operador, num2) {
     
if (typeof num1 == "number" && typeof num2 == "number"){
        if (operador == "+") return num1 + num2;
        if (operador == "-") return num1 - num2;
        if (operador == "x") return num1 * num2;
        if (operador == "/") return num1 / num2;
    }
  }


function extraValue(sum, operador, num3){
return mathematicalOperation(sum, operador, num3)
}


const input = document.querySelector("#user")
const result = document.createElement("div")
document.body.appendChild(result)

let ops = []

const equal = document.getElementById("equal").addEventListener("click", () => {
 data = input.value


ops = data.split("").filter(c => "+-x/".includes(c))
const nums = data.split(/[\+\-\x\/]/).map(n => parseFloat(n))


const resultado = mathematicalOperation(nums[0],ops[0],nums[1])

if (nums.length === 2 % resultado == NaN){
  result.textContent = "error"
  return
}
console.log(resultado)
//else result.textContent = resultado
//return


//if (nums.length === 2){
//const resultado = mathematicalOperation(nums[0],ops[0],nums[1])
//result.textContent = resultado  
//return
//}




if (nums.length === 3){
const firstpair = mathematicalOperation(nums[0],ops[0],nums[1])    
const final = extraValue(firstpair,ops[1],nums[2])
result.textContent = final
return
}

})
//["keyboard","onclick"].forEach(papa)


 



function opClick (op){
input.value+=op 
}

document.getElementById("add").addEventListener("click",() => opClick("+"))
document.getElementById("rest").addEventListener("click",() => opClick("-"))
document.getElementById("multi").addEventListener("click",() => opClick("x"))
document.getElementById("divide").addEventListener("click",() => opClick("/"))

document.getElementById("clear").addEventListener("click",() => {
input.value = ""    
result.textContent = ""    
})

document.getElementById("deleteLastOne").addEventListener("click",() => {
input.value = input.value.slice(0,-1)    
})
 const changeOfOperator = document.createElement("user")
document.body.appendChild(changeOfOperator)
changeOfOperator.textContent = ("buenas")


/*option = ""
option2 = ""
option3 = ""
let caja = undefined
let separacion = undefined;
let coco = undefined;
const equal = document.getElementById("equal")
equal.addEventListener("click", () => {
data = document.getElementById("user").value
  console.log(separacion = data.split(option))
  nume1 = parseFloat(separacion[0]) 
  nume2 = parseFloat(separacion[1])
  nume3 = parseFloat(separacion[2])   
  console.log("suma prueba", mathematicalOperation(nume1,option,nume2))
if (!separacion[2]) {
result.textContent = mathematicalOperation(nume1,option,nume2)
}

else {
all = mathematicalOperation(nume1,option,nume2)
result.textContent = extraValue(all,option2,nume3)
}
})

function total(){ 

 caja = document.getElementById("user").value
coco = caja.split(option2)
numero1 = parseFloat(coco[0]) 
numero2 = parseFloat(coco[1])
console.log(coco)
return  mathematicalOperation(numero1,option2,numero2)


}




const add = document.getElementById("add")
add.addEventListener("click", () => { 
data1 = document.getElementById("user").value+="+"
separacion = data1
coco = data1
option = "+"
option2 = "+"
if (secondClick === 2) {
total()
console.log (total())
}
 

})

const rest = document.getElementById("rest")
rest.addEventListener("click", () => {
secondClick++    
data2 = document.getElementById("user").value+="-"
separacion = data2
coco = data2

option = "-"
option2 = "-"

if (secondClick === 2) {
total()
console.log (total())
}

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








const result = document.createElement("div")
document.body.appendChild(result)

*/
