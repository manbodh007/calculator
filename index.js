var buttons = document.getElementsByClassName('button');

for(var i=0;i<buttons.length;i++){  
    buttons[i].addEventListener('click',function(){
    var value =  this.getAttribute("data-value");
    var display = document.getElementById("display");
    if(value=='+/-')
       {

       }
    else if(value=="ac")
        {
         display.innerText = 0; 
        }
     else if(value=='='){
         display.innerText = eval(display.innerText); 
     }
     else{
          if(display.innerText=='0')
           {
              display.innerText = value;
           }
          else{
             display.innerText += value;
           }   
     }
     
   });
}