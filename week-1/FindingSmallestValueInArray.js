//declaring an array named marks
let marks=[90,68,78,90];
//initializing the variable small with first element of array
let small=marks[0];
//checking small value by iterating the whole array
for(let i=0;i<marks.length;i++){
if(marks[i]<small)
small=marks[i];
}
//printing
console.log(small);
