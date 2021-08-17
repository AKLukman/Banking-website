document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount diposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('diposit-total');
    const previousDepositAmount = depositTotal.innerText;

    const updatedDepositAmount = parseFloat(previousDepositAmount) + newDepositAmount;
    depositTotal.innerText = updatedDepositAmount;

    // Update belance

    const updateBelanceText = document.getElementById('balence');

    const balanceText = updateBelanceText.innerText;
    const balance = parseFloat(balanceText);


    const totalBalance = newDepositAmount + balance;

    updateBelanceText.innerText = totalBalance;


    // clear input
    depositInput.value = '';

});


document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawBalanceText = document.getElementById('withdraw-input');
    const withdrawBalaceValue = withdrawBalanceText.value;
    const newWithdrawBalance = parseFloat(withdrawBalaceValue);

    // Previous balance
    const setBalance = document.getElementById('withdraw-balance');

    const previousBalance = parseFloat(setBalance.innerText);

    const totalWithdraw = previousBalance + newWithdrawBalance;

    setBalance.innerText = totalWithdraw;



    // Update Balance

    const updateBalanceText = document.getElementById('balence');

    const updateBalanceget = updateBalanceText.innerText;


    const updateBalance = parseFloat(updateBalanceget);


    const updatedBalance = updateBalance - newWithdrawBalance;


    updateBalanceText.innerText = updatedBalance;

    // Clear withdraw input

    withdrawBalanceText.value = '';



});