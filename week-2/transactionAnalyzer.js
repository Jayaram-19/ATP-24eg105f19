// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
// Tasks:
//     1. filter() all credit transactions
let allCreditTransactions=transactions.filter(payment=>payment.type==="credit")
console.log("All Credit Transactions are",allCreditTransactions)
//     2. map() to extract only transaction amounts
let transactionAmounts=transactions.map(payment=>payment.amount)
console.log("Transaction Amounts are",transactionAmounts)
//     3. reduce() to calculate final account balance
const finalBalance=transactions.reduce((balance,payment)=>{
  if(payment.type==="credit"){
    return balance+payment.amount;
  }else{
    return balance-payment.amount;
  }
},0);
console.log("Final Account Balance:",finalBalance);
//     4. find() the first debit transaction
let findingDebit=transactions.find(payment=>payment.type==="debit",0)
console.log("First debit Transaction is",findingDebit)
//     5. findIndex() of transaction with amount 10000
let findingIndex=transactions.findIndex(payment=>payment.amount===10000)
console.log("Index of 10000 amount transaction is",findingIndex)