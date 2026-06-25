const display = document.getElementById("display");

const numberButtons =
  document.querySelectorAll(".number");

const operatorButtons =
  document.querySelectorAll(".operator");

const clearBtn =
  document.getElementById("clear");

const equalsBtn =
  document.getElementById("equals");

let expression = "";

/*
  NUMBER BUTTONS
*/
numberButtons.forEach(button =>
  button.addEventListener('click',()=>{
    expression += button.textContent
    display.value = expression
  })
)

/*
  OPERATOR BUTTONS
*/
operatorButtons.forEach(button =>
  button.addEventListener('click',()=>{
    if (expression !== ""){
      expression += button.textContent
      display.value = expression
    }
  })
)

/*
  CLEAR
*/
clearBtn.addEventListener('click',()=>{
  expression = ""
  display.value = ""
})

/*
  EQUALS
*/

equalsBtn.addEventListener('click',()=>{
  try {
    const result = eval(expression)
    display.value = result
    expression = result.toString()
  } catch (error) {
    display.value = "Error"
    expression = ""
  }
})
