function getInputFieldValueById(id){
   const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
function getTextFieldValueById(id){
   const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}
function showSectionById(id){
    // hide all the section
   document.getElementById('add-money-section').classList.add('hidden');
   document.getElementById('cash-out-section').classList.add('hidden');
   document.getElementById('transactions-section').classList.add('hidden');
    // show the section with the provided id as a parameter
   document.getElementById(id).classList.remove('hidden');
}


