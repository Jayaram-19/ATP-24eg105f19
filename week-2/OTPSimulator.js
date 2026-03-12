// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends
console.log("OTP Sent Successfully")
let countdown=10;
const countdownInterval=setInterval(()=>{
countdown--;
console.log(countdown+" seconds remaining");
if(countdown===0){
console.log("countdown ended.You can now resend the OTP");
clearInterval(countdownInterval);
}
},1000)