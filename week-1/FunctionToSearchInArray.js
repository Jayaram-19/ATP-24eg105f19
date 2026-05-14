function search(arr,args){
for(let i=0;i<arr.length;i++){
if(arr[i]===args){
return `value found at index ${i}`;
}
}
return "Not Found";
}
let arr=[10,20,30,40];

let args=30;
let s=search(arr,args);
console.log(s);
