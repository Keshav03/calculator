
let answer = document.getElementById('answer');
let equation = document.querySelector("#equation");

let ans = 10
let equationLine = ""

//BUTTONS
let clearBtn = document.getElementById("clearBtn");
let signBtn = document.getElementById("signBtn");
let percentageBtn = document.getElementById("percentageBtn");
let divBtn = document.getElementById("divBtn");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let multBtn = document.getElementById("multBtn");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let negBtn = document.getElementById("negBtn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let plusBtn = document.getElementById("plusBtn");
let btn0 = document.getElementById("btn0");
let decBtn = document.getElementById("decBtn");
let equalBtn = document.getElementById("equalBtn");

//CLEAR BUTTON
clearBtn.addEventListener('click' , function(){
    ans = 0
    equationLine = ""
    equation.innerHTML= equationLine
    answer.innerHTML = ans
})

//SIGN BUTTON
signBtn.addEventListener('click' , function(){
    equationLine = "-( " + ans + " )"
    equation.innerHTML = equationLine
    ans *= -1
    answer.innerHTML = ans
})

//PERCENTAGE BUTTON
percentageBtn.addEventListener('click' , function(){
    
    equationLine = "(" + ans + " / 100)"
    ans /= 100
    answer.innerHTML = ans
    equation.innerHTML = equationLine

})

//BUTTON 0
btn0.addEventListener('click' , function(){

    if (equationLine == "" ){
        return
    }else{
        equationLine = equationLine + "0"
        equation.innerHTML = equationLine
    }
})

//BUTTON 1
btn1.addEventListener('click' , function(){
    equationLine = equationLine + "1"
    equation.innerHTML = equationLine
})

//BUTTON 2
btn2.addEventListener('click' , function(){
    equationLine = equationLine + "2"
    equation.innerHTML = equationLine
})

//BUTTON 3
btn3.addEventListener('click' , function(){
    equationLine = equationLine + "3"
    equation.innerHTML = equationLine
})

//BUTTON 4
btn4.addEventListener('click' , function(){
    equationLine = equationLine + "4"
    equation.innerHTML = equationLine
})


//BUTTON 5
btn5.addEventListener('click' , function(){
    equationLine = equationLine + "5"
    equation.innerHTML = equationLine
})

//BUTTON 6
btn6.addEventListener('click' , function(){
    equationLine = equationLine + "6"
    equation.innerHTML = equationLine
})

//BUTTON 8
btn8.addEventListener('click' , function(){
    equationLine = equationLine + "8"
    equation.innerHTML = equationLine
})

//BUTTON 7
btn7.addEventListener('click' , function(){
    equationLine = equationLine + "7"
        equation.innerHTML = equationLine
})

//BUTTON 9
btn9.addEventListener('click' , function(){
    equationLine = equationLine + "9"
    equation.innerHTML = equationLine
})

//DIVISION BUTTON 
divBtn.addEventListener('click' , function(){
    equationLine = equationLine + " / "
    equation.innerHTML = equationLine
})

//MULTIPLICATION BUTTON 
multBtn.addEventListener('click' , function(){
    equationLine = equationLine + " * "
    equation.innerHTML = equationLine
})

//SUBSTRACTION BUTTON 
negBtn.addEventListener('click' , function(){
    equationLine = equationLine + " - "
    equation.innerHTML = equationLine
})

//ADDITION BUTTON 
plusBtn.addEventListener('click' , function(){
    equationLine = equationLine + " + "
    equation.innerHTML = equationLine
})

//DECIMAL BUTTON 
decBtn.addEventListener('click' , function(){
    equationLine = equationLine + "."
    equation.innerHTML = equationLine
})
//Equal BUTTON 
equalBtn.addEventListener('click' , function(){
    ans = eval(equationLine)
    answer.innerHTML = ans
    equationLine = ans
    equation.innerHTML = equationLine
})