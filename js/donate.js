document.getElementById('noakhali_donate_btn').addEventListener('click', function(){
    const noakhaliDonateInput = getInputs('noakhali_donate_input');
    const noakhaliDonateAmount = getAmount('noakhali_donate_amount');
    const navAmount = getAmount('nav_amount');

    if(!isNaN(noakhaliDonateInput) && noakhaliDonateInput > 0){
        const newDonateAmount =  noakhaliDonateAmount + noakhaliDonateInput;
        const newNavAmount = navAmount - newDonateAmount;

        document.getElementById('noakhali_donate_amount').innerText = newDonateAmount.toFixed(2);
        document.getElementById('nav_amount').innerText = newNavAmount.toFixed(2);

        document.getElementById('success').classList.remove('hidden');
    }
    else{
        alert('Please enter a valid donation amount.')
    }
})


document.getElementById('close').addEventListener('click', function(){
    document.getElementById('success').classList.add('hidden');
})