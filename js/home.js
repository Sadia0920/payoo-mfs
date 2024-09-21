document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney =parseFloat(document.getElementById('add-money-input').value);
    const addPin =parseFloat(document.getElementById('add-pin-input').value);
    if(addPin === 1234){
        const availableBalance =parseFloat(document.getElementById('balance').innerText);
        const newBalance = availableBalance + addMoney;
        document.getElementById('balance').innerText = newBalance;
        console.log(newBalance);
    }
    else{
        alert('Wrong phone number or pin');
    }
})

document.getElementById('btn-cashout-money').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutMoney =parseFloat(document.getElementById('cash-out-input').value);
    const cashOutPin =parseFloat(document.getElementById('cash-out-pin-input').value);
    if(cashOutPin === 1234){
        const availableBalance =parseFloat(document.getElementById('balance').innerText);
        const newBalance = availableBalance - cashOutMoney;
        document.getElementById('balance').innerText = newBalance;
        console.log(newBalance);
    }
    else{
        alert('Wrong phone number or pin');
    }
})

    