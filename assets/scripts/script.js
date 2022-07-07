let currentNumber = document.getElementById("currentNumber");

let number = 0;

function decrement(){        
    number--;
    currentNumber.innerHTML = number;

    if(number < 0)
    {
        currentNumber.style.color = "red";
    }
}

function increment(){
    number++;
   
    currentNumber.innerHTML = number; 

    if(number >= 0)
    {
        currentNumber.style.color = "black";
    }
    
}