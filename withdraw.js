//Adding The Event Handler To The Withdraw Button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Getting The User Given Amout Of Withdraw
    const withdrawamountFeild = document.getElementById('user-withdraw');
    const givenWithdrawAmountString = withdrawamountFeild.value;
    const givenWithdrawAmount = parseFloat(givenWithdrawAmountString);
    // Update the Withdraw Amount Box
    const currentWithdrawBalance = document.getElementById('withdraw-amount');
    const currentWithdrawBalanceString = currentWithdrawBalance.innerText;
    const withdrawedBalance = parseFloat(currentWithdrawBalanceString);
   
    const withdrawedAmount = withdrawedBalance + givenWithdrawAmount;
   
 
    currentWithdrawBalance.innerText = withdrawedAmount;
    // Update The Balance Total Part
    const currentBalance = document.getElementById('balance-amount');
    const currentBalanceAmount = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceAmount);
    if (givenWithdrawAmount > currentBalanceTotal) {
        alert("kireeee")
        return ;
    }
    const currentBalanceAfterWithdraw = currentBalanceTotal - givenWithdrawAmount;
    currentBalance.innerText = currentBalanceAfterWithdraw;
    withdrawamountFeild.value = '';
    
})