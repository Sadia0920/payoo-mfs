document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const number = parseFloat(document.getElementById('number-input').value);
    const pin = parseFloat(document.getElementById('pin-input').value);
    // validate
    if(pin === 1234){
        window.location.href='./home.html';
    }
    else{
        alert('wrong phone number or pin');
    }
})