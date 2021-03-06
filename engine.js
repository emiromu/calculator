
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
const btndel= document.querySelector("#btndel")
const btnclear= document.querySelector("#btnclear")
/* operator buttons */
const btnadd = document.querySelector("#btnadd")
const btnsub = document.querySelector("#btnsub")
const btnmul = document.querySelector("#btnmul")
const btndiv = document.querySelector("#btndiv")
const btneq = document.querySelector("#btneq")
const btnsign = document.querySelector("#btnsign")
const btnuseless = document.querySelector("#btnuseless")

/* screen display */
let displaystr='';


function add(a,b){
    return parseFloat(a)+parseFloat(b);
};

function substract(a,b){
    return parseFloat(a)-parseFloat(b);
};

function multiply(a,b){
    return parseFloat(a)*parseFloat(b);
};

function divide(a,b){
    return +((parseFloat(a)/parseFloat(b)).toFixed(30));
};

function operate(op,a,b){
    if(b==0){
        alert("Can't divide by 0 ;_;");
        return NaN;
    };

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
    if(displaystr.length ==0 && char=='.'){
        displaystr = displaystr + '0.'
    };

    displaystr = displaystr + char;
    document.querySelector("#screen").textContent = displaystr;
    return displaystr;
};

function signDisplay(){
    if(displaystr[0]=='-'){
        displaystr = '+'+displaystr.substr(1,displaystr.length-1);
    }else if (displaystr[0]=='+'){
        displaystr = '-'+displaystr.substr(1,displaystr.length-1);
    }else{
        displaystr = '-'+displaystr;
    }

    document.querySelector("#screen").textContent = displaystr;
    return displaystr;
}

function clearDisplay(){
    displaystr = '';
    document.querySelector("#screen").textContent = displaystr;
    return displaystr;
}

function parseDisplay(str){
    str=str.split('');
    //add a 0 in front of signed numbers to help parsing
    if(str[0]=='-' || str[0]=='+'){str.unshift('0');};
    //array of parts to be operated in order
    let parts=[];
    //integer part or operator part
    let part=[];

    for(let i=0; i<str.length; i++){
        //if character is a digit
        if(['0','1','2','3','4','5','6','7','8','9','.'].indexOf(str[i])>-1){
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

    //operate all parts
    let newpart=[];
    while(parts.length>=3){
        newpart[0] = operate(parts[1].join(''),parseFloat(parts[0].join('')),parseFloat(parts[2].join('')));
        parts.shift();
        parts.shift();
        parts.shift();
        parts.unshift(newpart);
    };

    console.log(parts[0].join(''));
    return(parts[0].join(''));
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
btnpoint.addEventListener("click",function(){
    if(displaystr.includes('.') == false){
        updateDisplay('.');
    };
});
btnclear.addEventListener("click",function(){
    clearDisplay();
});
btndel.addEventListener("click",function(){
    displaystr = displaystr.substr(0,displaystr.length-1);
    document.querySelector("#screen").textContent = displaystr;
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
    displaystr = parseDisplay(displaystr);
    document.querySelector("#screen").textContent = displaystr;
});
btnsign.addEventListener("click",function(){
    signDisplay();
});
btnuseless.addEventListener("click",function(){
    alert(':)');
});

 