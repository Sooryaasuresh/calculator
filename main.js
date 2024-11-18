//function to display content
function displayContent(content){
     result.value+=content
}

//clear input
function calcClear(){
    result.value=""
}

//evaluation
function calcOutput(){
   result.value=eval(result.value)
}

//backspace
function removeLastDigit(){
    result.value=result.value.slice(0,-1)
}