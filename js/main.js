const rangeValue = document.querySelectorAll('.range');
const textInput = document.querySelectorAll('.textInput')
const block = document.querySelector('.block')
const rangeRed = rangeValue[0]
const rangeGreen = rangeValue[1]
const rangeBlue = rangeValue[2]

rangeRed.oninput = function(){
    block.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`
    textInput[0].value = rangeRed.value
    result.value = `.block{\n     background-color: rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value});\n}`
}
rangeGreen.oninput = function(){
    block.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`
    textInput[1].value = rangeGreen.value
    result.value = `.block{\n     background-color: rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value});\n}`
}
rangeBlue.oninput = function(){
    block.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`
    textInput[2].value = rangeBlue.value
    result.value = `.block{\n     background-color: rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value});\n}`
}

const result = document.getElementById('result');
