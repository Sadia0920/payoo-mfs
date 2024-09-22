document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney =getInputFieldValueById('add-money-input');
    const addPin = getInputFieldValueById ('add-pin-input');
    // const addMoney =parseFloat(document.getElementById('add-money-input').value);
    // const addPin =parseFloat(document.getElementById('add-pin-input').value);
    if(isNaN(addMoney)){
        alert('Failed to add a money');
        return;
    }
    if(addPin === 1234){
        const availableBalance =getTextFieldValueById('balance');
        // const availableBalance =parseFloat(document.getElementById('balance').innerText);
        const newBalance = availableBalance + addMoney;
        document.getElementById('balance').innerText = newBalance;
        // console.log(newBalance);
        // add to transactions history
        const div = document.createElement('div');
        div.classList.add('bg-blue-300');
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Add Money</h4>
        <p> ${addMoney} Tk. Added New Balance: ${newBalance}</p>
        `
        document.getElementById('transactions-container').appendChild(div);
    }
    else{
        alert('Wrong phone number or pin');
    }
})

document.getElementById('btn-cashout-money').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutMoney =getInputFieldValueById('cash-out-input');
    const cashOutPin =getInputFieldValueById('cash-out-pin-input');
    // const cashOutMoney =parseFloat(document.getElementById('cash-out-input').value);
    // const cashOutPin =parseFloat(document.getElementById('cash-out-pin-input').value);
    if(isNaN(cashOutMoney)){
        alert('Failed to cash out');
        return;
    }
    if(cashOutPin === 1234){
        const availableBalance =getTextFieldValueById('balance');
        if(cashOutMoney > availableBalance){
            alert("You don't have enough money");
            return;
        }
        // const availableBalance =parseFloat(document.getElementById('balance').innerText);
        const newBalance = availableBalance - cashOutMoney;
        document.getElementById('balance').innerText = newBalance;
        // console.log(newBalance);
        // Transaction section
        const div = document.createElement('div');
        div.classList.add('bg-blue-500');
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out Money</h4>
        <p> ${cashOutMoney} Tk. withdraw New Balance: ${newBalance}</p>
        `
        document.getElementById('transactions-container').appendChild(div);
    }
    else{
        alert('Wrong phone number or pin');
    }
})

    