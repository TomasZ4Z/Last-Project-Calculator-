//Tu calculadora contendrá funciones para todos los operadores matemáticos básicos que suelen encontrarse
//  en calculadoras, así que empieza creando funciones para los siguientes elementos y pruébalas en la consola de tu navegador:

//sumar
//restar
//multiplicar
//dividir
// Tu calculadora contendrá funciones para todos los operadores matemáticos básicos que suelen encontrarse 
// en calculadoras, así que empieza creando funciones para los siguientes elementos y pruébalas en la consola de tu navegador:
 


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
const resulty = document.createElement("div")
resulty.textContent = 'padresito, me duele el poto'
document.body.appendChild(resulty)

let ops = []


const equal = document.getElementById("equal").addEventListener("click", () => {
 data = input.value


ops = data.split("").filter(c => "+-x/".includes(c))

const nums = data.split(/[\+\-\x\/]/).map(n => parseFloat(n))


const resultado = mathematicalOperation(nums[0],ops[0],nums[1])


if (isNaN(resultado)) {
  resulty.textContent = "error";
}

else if (nums.length ===  2){
    resulty.textContent = resultado
} 

console.log(resultado)





if (nums.length === 3){
const firstpair = mathematicalOperation(nums[0],ops[0],nums[1])    
const final = extraValue(firstpair,ops[1],nums[2])
resulty.textContent = final
return
}

})


 let secondClick = 0
 
function opClick(op) {
  secondClick += 1

  if (secondClick === 1) {
    input.value += op  
    return
  }

    if (secondClick === 2){
    input.value += ""
    return
   }
}


document.getElementById("add").addEventListener("click",() => opClick("+"))
document.getElementById("rest").addEventListener("click",() => opClick("-"))
document.getElementById("multi").addEventListener("click",() => opClick("x"))
document.getElementById("divide").addEventListener("click",() => opClick("/"))





document.getElementById("clear").addEventListener("click",() => {
input.value = ""    
resulty.textContent = ""    
secondClick = 0
})

document.getElementById("deleteLastOne").addEventListener("click",() => {
input.value = input.value.slice(0,-1)    
secondClick = 0
})

document.getElementById("spot").addEventListener("click", () => {
 input.value += "." 
})

 const changeOfOperator = document.createElement("user")
document.body.appendChild(changeOfOperator)
changeOfOperator.textContent = "buenas"

let numberGrowing = 0

const contenedor = document.getElementById("contenedor")

for (let i = 0; i < 10; i++){  
const create = document.createElement("button")
 numberGrowing += 1 
 if (i === 0){
 numberGrowing = 0 
 }

create.textContent = numberGrowing

create.addEventListener("click",() => {
input.value += create.textContent
secondClick = 0
})

contenedor.appendChild(create)

}




