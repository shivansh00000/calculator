let inputStr=""; let prevInputStr="";
let resStr=""; let prevResStr="";

let input=document.getElementById("res");
function resAdd() {
    input.value=inputStr;
    input.scrollLeft = input.scrollWidth;
}


document.querySelector("#percent").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr+="%";
    resStr+="*0.01";
    resAdd();
})

document.querySelector("#clear").onclick=(()=>{
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr="";
    resStr="";
    resAdd();
})

document.querySelector("#clear2").onclick=(()=>{
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr="";
    resStr="";
    resAdd();
})

document.querySelector("#backspace").onclick=(()=>{    
    inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
    resStr=prevResStr; prevResStr=prevResStr.slice(0,-1);
    resAdd();
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
        resAdd();
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
    resAdd();
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
        resAdd();
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
    resAdd();
})

document.querySelector("#multiply").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr+="×";
    resStr+="*";
    resAdd();
})

document.querySelector("#add").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr+="+";
    resStr+="+";
    resAdd();
})

document.querySelector("#minus").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    prevInputStr=inputStr ; prevResStr=resStr;
    inputStr+="-";
    resStr+="-";
    resAdd();
})

document.querySelector("#equal").onclick=(()=>{
    if (!"1234567890()".includes(resStr.slice(-1))){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr;
    }
    if(inputStr!==""){
        prevInputStr=inputStr ; prevResStr=resStr;
        inputStr=eval(resStr);
        resAdd();
        inputStr="";
        resStr="";        
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
            resAdd();
        }
    }
    else{
        btn.onclick=()=>{
            prevInputStr=inputStr ; prevResStr=resStr;
            inputStr+=x;
            resStr+=x;
            resAdd();
        }
    }
})

document.body.addEventListener('keydown', (event) => {
    document.body.classList.add("hide-cursor");
    
    if(event.key=="=") {
        if (!"1234567890()".includes(resStr.slice(-1))){
            inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
            resStr=prevResStr;
        }
        if(inputStr!==""){
            prevInputStr=inputStr ; prevResStr=resStr;
            inputStr=eval(resStr);
            resAdd();
            inputStr="";
            resStr="";
        }
    }
    if(event.key=="Enter") {
        if (!"1234567890()".includes(resStr.slice(-1))){
            inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
            resStr=prevResStr;
        }
        if(inputStr!==""){
            prevInputStr=inputStr ; prevResStr=resStr;
            inputStr=eval(resStr);
            resAdd();    
            inputStr="";
            resStr="";         
        }
    }
    if(event.key=="Backspace"){
        inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
        resStr=prevResStr; prevResStr=prevResStr.slice(0,-1);
        resAdd();
    }
    if(event.key=="+" || event.key=="-"){
        if (!"1234567890()".includes(resStr.slice(-1))){
            inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
            resStr=prevResStr;
        }
        prevInputStr=inputStr ; prevResStr=resStr;
        inputStr+=event.key;
        resStr+=event.key;
        resAdd();
    }
    if(event.key=="/"){
        if (!"1234567890()".includes(resStr.slice(-1))){
            inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
            resStr=prevResStr;
        }
        prevInputStr=inputStr ; prevResStr=resStr;
        inputStr+="÷";
        resStr+="/";
        resAdd();
    }
    
    if(event.key=="*"){
        if (!"1234567890()".includes(resStr.slice(-1))){
            inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
            resStr=prevResStr;
        }
        prevInputStr=inputStr ; prevResStr=resStr;
        inputStr+="×";
        resStr+="*";
        resAdd();
    }
    if(event.key=="%"){
        if (!"1234567890()".includes(resStr.slice(-1))){
            inputStr=prevInputStr; prevInputStr=prevInputStr.slice(0,-1);
            resStr=prevResStr;
        }
        prevInputStr=inputStr ; prevResStr=resStr;
        inputStr+="%";
        resStr+="*0.01";
        resAdd();
    }
    if("1234567890().".includes(event.key)){
        prevInputStr=inputStr ; prevResStr=resStr;
        inputStr+=event.key;
        resStr+=event.key;
        resAdd();
    }

})
document.addEventListener("mousemove", () => {
    document.body.classList.remove("hide-cursor");
})


