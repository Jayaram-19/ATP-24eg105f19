//write a function that recieves any no of args nad return their sum

const findSum=(...numbers)=>{
return numbers.reduce((sum,ele)=>sum+ele)
}
let result=findSum(10,20,30)
console.log(result)






//other approach

// function findSum(...a){
// let sum=0;
// for(let v of a){
// sum+=v;
// }
// return sum;
// }
// console.log(findSum(10,20,30,40))