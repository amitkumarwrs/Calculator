let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonArray = Array.from(buttons);
let string='';

buttonArray.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        if(e.target.innerText=='DEL'){
            string=string.substring(0,string.length-1);
            display.value=string;
        } else if(e.target.innerText=='AC'){
            string='';
            display.value=string;
        }else if(e.target.innerText=='='){
            
                string=eval(string);
                display.value=string;        
        }else {
            string +=e.target.innerText;
            display.value=string;
        }
 });
});
