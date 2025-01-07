const finalResult = document.querySelector(".math");
const genBtn = document.querySelector(".genBtn");
const signs = ["+", "-", "×", "÷"]

genBtn.addEventListener("click", (e) => {
    clearSlate();
    calculate();
})

function clearSlate() {
    finalResult.textContent = "";
}

function generateEquation() {
    let = firstInt = Math.floor(Math.random() * 10000)
    let = secondInt = Math.floor(Math.random() * 10000)

    let sign = signs[Math.floor(Math.random() * signs.length)]

    return `${firstInt} ${sign} ${secondInt} =`
}

function calculate() {
    equation = generateEquation().split(" ")
    let firstNumber = parseInt(equation[0])
    let operator = `${equation[1]}`
    let secondNumber = parseInt(equation[2])
    let result 
    switch (operator) {
        case "+": {
            result = (firstNumber + secondNumber).toLocaleString()
        }
        break; 
        case "-": {
            result = (firstNumber - secondNumber).toLocaleString()
        }
        break; 
        case "×": {
            result = (firstNumber * secondNumber).toLocaleString()
        }
        break; 
        case "÷": {
            result = (firstNumber / secondNumber).toFixed(2).toLocaleString()
        }
        break; 
    }

    const formattedFirstNumber = firstNumber.toLocaleString();
    const formattedSecondNumber = secondNumber.toLocaleString();
    finalResult.textContent = `${formattedFirstNumber} ${equation[1]} ${formattedSecondNumber} = ${result}`
}