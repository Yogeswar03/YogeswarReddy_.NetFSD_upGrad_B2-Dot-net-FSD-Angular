let num = 25;
let result = (num >= 0) ? "Positive" : "Negative";
console.log(result);
if(num % 2 == 0){
    console.log("Even");
}else{
    console.log("Odd");
}

console.log(`Numbers from 1 to ${num}  : `);


for(let i = 1; i <= num; i++){
    console.log(i);
    
}
