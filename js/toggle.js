// cash out button
document.getElementById('button-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('cash-out-section').classList.remove('hidden');
    document.getElementById('add-money-section').classList.add('hidden');
})
// add money button
document.getElementById('button-add-money').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('add-money-section').classList.remove('hidden');
})

document.getElementById('btn-logout').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='/index.html'; 
})