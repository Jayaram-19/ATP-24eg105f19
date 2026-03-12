function big(x,y,z){
let u=(x>y&&x>z)?(`x is big its value is ${x}`):(y>z)?(`y is big its value is ${y}`):(`z is big its value is ${z}`)
return u;
}
console.log(big(10,20,30));