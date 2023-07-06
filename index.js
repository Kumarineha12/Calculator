let input=document.getElementById('inputb');
let btns=document.querySelectorAll('button');
let string="";
let a=Array.from(btns);
a.forEach(button=>{
button.addEventListener('click',(e)=>{
    btntxt=e.target.innerText
    if(btntxt== '='){
        string=eval(string);
        input.value=string;
    }
    else if(btntxt== 'AC'){
        string= "";
        input.value = string;
    }
    else if(btntxt== 'x'){
        btntxt='*';
        string+=btntxt;
        input.value=string;
    }
    else if(btntxt == 'DEL'){
        string= string.substring(0, string.length-1);
        input.value = string;
    }
    else{
    string+=btntxt;
    input.value=string;
    }
})
})