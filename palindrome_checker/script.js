let input = document.getElementById("palindromeInput").v;
let form = document.getElementById("palindrome-form");
let result = document.getElementById("result");
let submit = document.getElementById("submit");

submit.addEventListener("click",()=>{
    let inputValue = document.getElementById("palindromeInput").value;
    if(inputValue===""){
        alert("enter the value here :smile ");
    }else{
        let h1 = document.createElement("h1");
        result.append(h1);
        let reversed = inputValue.reverse();
        if(inputValue===reversed){
            h1.innerHTML="Palindrome it is git add .";
        }
        else{
            h1.innerHTML="not a palindrome number :sad";
        }
        
    }
    console.log("pu");
})