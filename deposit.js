// Adding The Evnet Handler to The Deposit Button
//Always Remember that Button jekhane Event Handler sekhan e

document.getElementById('btn-deposit').addEventListener('click',function(){
//    Getting The Deposite Amount From the Input Feild
const depositFeildAmount = document.getElementById('user-deposit');
const depositAmountString = depositFeildAmount.value;
const depositAmount = parseFloat(depositAmountString);
//Getting The Deposit Current Value
const currentDepositAmount = document.getElementById('deposit-amount');
const currentDepositAmountString = currentDepositAmount.innerText;
const currentDepositTotal = parseFloat(currentDepositAmountString);
const finalDeposit = currentDepositTotal + depositAmount ;
currentDepositAmount.innerText = finalDeposit;

// Update The Balance Total Part
const currentBalance = document.getElementById('balance-amount');
const currentBalanceAmount = currentBalance.innerText;
const currentBalanceTotal = parseFloat(currentBalanceAmount);
const currentBalanceAfterDeposit = currentBalanceTotal + depositAmount;
currentBalance.innerText = currentBalanceAfterDeposit;
depositFeildAmount.value = '';
})