deposit = document.getElementById('depositOutput'),
withdraw = document.getElementById('widthdrawOutput'),
balance = document.getElementById('balance'),
depositInput = document.getElementById('depositInput'),
withdrawInput = document.getElementById('widthdrawInput'),
depositBtn = document.getElementById('depositBtn'),
withdrawBtn = document.getElementById('widthdrawBtn')

// Add deposit start
depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    if (Number(value) < 500){
        alert("Sorry, Please less than 500!!!");
    }
    else{
        const depositValue = Number(deposit.innerText) + Number(value);
        const balanceValue = Number(balance.innerText) + Number(value);
        deposit.innerText = depositValue.toFixed(2);
        balance.innerText = balanceValue.toFixed(2);
        depositInput.value = '';
    }
    
})
// add deposit end


// withdraw is started
withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    if (Number(value) === 0) {
        alert("You don't have any balance to withdraw");
    } else if (Number(value) > Number(balance.innerText)) {
        alert("You don't have that much balance to withdraw");
    } else {
        const balanceValue = Number(balance.innerText) - Number(value);
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        withdraw.innerText = withdrawValue.toFixed(2);
        balance.innerText = balanceValue.toFixed(2);
        withdrawInput.value = '';
    }
})
// withdraw is ended