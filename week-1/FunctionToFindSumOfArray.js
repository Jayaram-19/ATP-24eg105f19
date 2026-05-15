//declaring a function for finding sum of elements in an array
function total(arr){
let t1=0
for(let i=0;i<arr.length;i++){
t1+=arr[i];
}
return `sum of the elements in the array is ${t1}`;
}
let arr=[10,30,20];
//printing after calling the function
console.log(total(arr));
