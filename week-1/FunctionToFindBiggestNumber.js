//declaring a function named big
function big(x,y,z){
//finding biggest value by using ternary operator
let u=(x>y&&x>z)?(`x is big its value is ${x}`):(y>z)?(`y is big its value is ${y}`):(`z is big its value is ${z}`)
return u;
}
//printing biggest value
console.log(big(10,20,30));
