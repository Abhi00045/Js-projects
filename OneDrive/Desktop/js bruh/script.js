// // let marks = 140;
// // if(marks>=200) console.log(`pass`);
// // else if(marks<200 && marks>100) console.log(`good`);
// // else console.log(`fail`);

// function fact(n){
//     if(n==0 || n==1){
//          return 1;
//     }
//     let res=1;
//     for(let i=2;i<=n;i++){
//         res=res*i;
//     }return res;

// }
// function factorial(n,r){
//     let ncr = fact(n) / (fact(r) * (fact(n)-fact(r))); 
// }
// let n=5 , r=3;
// console.log(factorial(n,r));

// function nCr(n, r) 
// { 
//     return fact(n) / (fact(r) * fact(n - r)); 
// } 
// function fact(n) 
// { 
    //   if(n==0 || n==1)
    //   return 1;
    // var res = 1; 
//     for (var i = 2; i <= n; i++) 
//         n = n * i; 
//     return n; 
// } 
// var n = 5, r = 3; 
// console.log(nCr(n, r)); '
// function fun(x){
//     function inner(y) {
//         return x+y;
//     }
//      return inner(6)
// }
// let sum = fun(2)
// console.log(sum);
// function fun(x) {
    
// }

let players=[
    {name:"abhi",score:200},
    {name:"akhil",score:200},
    {name:"abhinav",score:200},
    {name:"saritha",score:200},
    {name:"kohli",score:200},
    {name:"dhoni",score:200}
]
console.log(players.push(
    {name:"pandya" , score:4}
));
