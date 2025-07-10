let inputStr=""; let prevInputStr="";
let resStr=""; let prevResStr="";

document.querySelector("#percent").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr+="%";
    resStr+="*0.01";
    document.querySelector("#res").value=inputStr;
})

document.querySelector("#clear").onclick=(()=>{
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr="";
    resStr="";
    document.querySelector("#res").value=inputStr;
})

document.querySelector("#clear2").onclick=(()=>{
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr="";
    resStr="";
    document.querySelector("#res").value=inputStr;
})

document.querySelector("#backspace").onclick=(()=>{    
    inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
    resStr=prevResStr; prevResStr=prevResStr.slice(0,-1);
    document.querySelector("#res").value=inputStr;
})

document.querySelector("#reciprocal").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    if(inputStr!==""){
        prevInputStr=inputStr ; prevResStr=resStr;
        inputStr=`1/(${inputStr})`;
        resStr=`1/(${resStr})`;
        document.querySelector("#res").value=inputStr;
    }
})

document.querySelector("#square").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr=inputStr+"^2";
    resStr=resStr+"**2";
    document.querySelector("#res").value=inputStr;
})

document.querySelector("#root").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    if(inputStr!==""){
        prevInputStr=inputStr ; prevResStr=resStr;
        inputStr= Math.sqrt(eval(resStr));
        resStr= Math.sqrt(eval(resStr));
        document.querySelector("#res").value=inputStr;
    }
})

document.querySelector("#divide").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr+="÷";
    resStr+="/";
    document.querySelector("#res").value=inputStr;
})

document.querySelector("#multiply").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr+="×";
    resStr+="*";
    document.querySelector("#res").value=inputStr;
})

document.querySelector("#add").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr+="+";
    resStr+="+";
    document.querySelector("#res").value=inputStr;
})

document.querySelector("#minus").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr+="-";
    resStr+="-";
    document.querySelector("#res").value=inputStr;
})

document.querySelector("#equal").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    if(inputStr!==""){
        prevInputStr=inputStr ; prevResStr=resStr;
        inputStr=eval(resStr);
        document.querySelector("#res").value=inputStr;
    }
})

btns=document.querySelectorAll(".btns");
btns.forEach((btn,idx)=>{
    let x= btn.innerText;
    if(idx==9){
        btn.onclick=()=>{
            if (!"1234567890()".includes(resStr.slice(-1))){
            inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
            resStr=prevResStr;
            }
            prevInputStr=inputStr ; prevResStr=resStr;
            inputStr=eval(resStr)*(-1);
            document.querySelector("#res").value=inputStr;
        }
    }
    else{
        btn.onclick=()=>{
            prevInputStr=inputStr ; prevResStr=resStr;
            inputStr+=x;
            resStr+=x;
            document.querySelector("#res").value=inputStr;
        }
    }
})

