
/* digit buttons */
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")
const btn0 = document.querySelector("#btn0")
const btnpoint = document.querySelector("#btnpoint")
const btnclear= document.querySelector("#btnclear")
/* operator buttons */
const btnadd = document.querySelector("#btnadd")
const btnsub = document.querySelector("#btnsub")
const btnmul = document.querySelector("#btnmul")
const btndiv = document.querySelector("#btndiv")
const btneq = document.querySelector("#btneq")

/* screen display */
let displaystr='';


function add(a,b){
    return a+b;
};

function substract(a,b){
    return a-b;
};

function multiply(a,b){
    return a*b;
};

function divide(a,b){
    return a/b;
};

function operate(op,a,b){
    switch(op){
        case "+":
            return add(a,b);
        break;
        case "-":
            return substract(a,b);
        break;
        case "*":
            return multiply(a,b);
        break;
        case "/":
            return divide(a,b);
        break;
        default: return NaN;
    };
};

function updateDisplay(char){
    if(displaystr.length ==0 && [0,1,2,3,4,5,6,7,8,9].indexOf(char)<0){
    displaystr = displaystr + '0'
    };
    displaystr = displaystr + char;
    document.querySelector("#screen").textContent = displaystr;
    return displaystr;
};

function clearDisplay(){
    displaystr = '';
    document.querySelector("#screen").textContent = displaystr;
    return displaystr;
}

function parseDisplay(str){
    str=str.split('');
    let result=0;

    //array of parts to be operated in order
    let parts=[];
    //integer part or operator part
    let part=[];

    for(let i=0; i<str.length; i++){
        //if character is a digit
        if(['0','1','2','3','4','5','6','7','8','9'].indexOf(str[i])>-1){
            part.push(str[i]);
        }else{
            //push the existing part
            parts.push(part);

            //push the operator part
            part=[];
            part.push(str[i]);
            parts.push(part);

            part=[];
        };
    }
    //push the last existing part
    parts.push(part);
    console.log("parts length",parts.length);

    //operate all parts
    while(parts.length>=3){
        console.log("operate("+parts[1].join('')+","+parseInt(parts[0].join(''))+","+parseInt(parts[2].join(''))+")");
        result = result + operate(parts[1].join(''),parseInt(parts[0].join('')),parseInt(parts[2].join('')));
        parts.shift();
        parts.shift();
        parts.shift();
    };

    console.log(result);
    return(result);
};




/* Button events*/

btn0.addEventListener("click",function(){
    updateDisplay(0);
});
btn1.addEventListener("click",function(){
    updateDisplay(1);
});
btn2.addEventListener("click",function(){
    updateDisplay(2);
});
btn3.addEventListener("click",function(){
    updateDisplay(3);
});
btn4.addEventListener("click",function(){
    updateDisplay(4);
});
btn5.addEventListener("click",function(){
    updateDisplay(5);
});
btn6.addEventListener("click",function(){
    updateDisplay(6);
});
btn7.addEventListener("click",function(){
    updateDisplay(7);
});
btn8.addEventListener("click",function(){
    updateDisplay(8);
});
btn9.addEventListener("click",function(){
    updateDisplay(9);
});
btnclear.addEventListener("click",function(){
    clearDisplay();
});

btnadd.addEventListener("click",function(){
    updateDisplay('+');
});
btnsub.addEventListener("click",function(){
    updateDisplay('-');
});
btnmul.addEventListener("click",function(){
    updateDisplay('*');
});
btndiv.addEventListener("click",function(){
    updateDisplay('/');
});
btneq.addEventListener("click",function(){
    console.log("display string = "+displaystr);
    parseDisplay(displaystr);
});

 