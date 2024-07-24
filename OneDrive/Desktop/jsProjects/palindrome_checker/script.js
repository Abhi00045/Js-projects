let input = document.getElementById("palindromeInput");
let result = document.getElementById("result");
let submit = document.getElementById("check");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let value = input.value;
    let reverse = value.split("").reverse().join("");

    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    div.append(h1);
    result.append(div);
    if(reverse === value){
        h1.innerHTML = `${value} is a palindrome`;
    }else{
        h1.innerHTML =`${value} is not a palindrome`;
    }
})
