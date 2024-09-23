// Donate for Flood at Noakhali, Bangladesh
document.getElementById('noakhali_donate_btn').addEventListener('click', function () {
    const noakhaliDonateInput = getInputs('noakhali_donate_input');
    const noakhaliDonateAmount = getAmount('noakhali_donate_amount');
    const navAmount = getAmount('nav_amount');

    if (!isNaN(noakhaliDonateInput) && noakhaliDonateInput > 0) {
        const newDonateAmount = noakhaliDonateAmount + noakhaliDonateInput;
        const newNavAmount = navAmount - noakhaliDonateInput;

        document.getElementById('noakhali_donate_amount').innerText = newDonateAmount.toFixed(2);
        document.getElementById('nav_amount').innerText = newNavAmount.toFixed(2);

        document.getElementById('success').classList.remove('hidden');
    }
    else {
        alert('Please enter a valid donation amount.')
    }

    // history
    const historyItem = document.createElement('div');
    historyItem.className = 'p-8 border rounded-md container mx-auto mt-4';
    historyItem.innerHTML = `
    <h4 class="text-[#111111] font-semibold text-xl">${noakhaliDonateInput} dolar Donate for Flood at Noakhali, Bangladesh</h4>
    <small>${new Date().toString()}</small>

    `
    const historyContainer = document.getElementById('history_container');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})

// Donate for Flood Relief in Feni,Bangladesh
document.getElementById('feni_donate_btn').addEventListener('click', function () {
    const feniDonateInput = getInputs('feni_donate_input');
    const feniDonateAmount = getAmount('feni_donate_amount');
    const navAmount = getAmount('nav_amount');

    if (!isNaN(feniDonateInput) && feniDonateInput > 0) {
        const newDonateAmount = feniDonateAmount + feniDonateInput;
        const newNavAmount = navAmount - feniDonateInput;

        document.getElementById('feni_donate_amount').innerText = newDonateAmount.toFixed(2);
        document.getElementById('nav_amount').innerText = newNavAmount.toFixed(2);

        document.getElementById('success').classList.remove('hidden');
    }
    else {
        alert('Please enter a valid donation amount.')
    }

    // history
    const historyItem = document.createElement('div');
    historyItem.className = 'p-8 border rounded-md container mx-auto mt-4';
    historyItem.innerHTML = `
    <h4 class="text-[#111111] font-semibold text-xl">${feniDonateInput} dolar Donate for Flood Relief in Feni,Bangladesh</h4>
    <small>${new Date().toString()}</small>

    `
    const historyContainer = document.getElementById('history_container');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})

// Aid for Injured in the Quota Movement
document.getElementById('injured_donate_btn').addEventListener('click', function () {
    const injuredDonateInput = getInputs('injured_donate_input');
    const injuredDonateAmount = getAmount('injured_donate_amount');
    const navAmount = getAmount('nav_amount');

    if (!isNaN(injuredDonateInput) && injuredDonateInput > 0) {
        const newDonateAmount = injuredDonateAmount + injuredDonateInput;
        const newNavAmount = navAmount - injuredDonateInput;

        document.getElementById('injured_donate_amount').innerText = newDonateAmount.toFixed(2);
        document.getElementById('nav_amount').innerText = newNavAmount.toFixed(2);

        document.getElementById('success').classList.remove('hidden');

        // history
    const historyItem = document.createElement('div');
    historyItem.className = 'p-8 border rounded-md container mx-auto mt-4';
    historyItem.innerHTML = `
    <h4 class="text-[#111111] font-semibold text-xl">${injuredDonateInput} dolar Aid for Injured in the Quota Movement</h4>
    <small>${new Date().toString()}</small>

    `
    const historyContainer = document.getElementById('history_container');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }
    else {
        alert('Please enter a valid donation amount.')
    }

    // history
    const historyItem = document.createElement('div');
    historyItem.className = 'p-8 border rounded-md container mx-auto mt-4';
    historyItem.innerHTML = `
    <h4 class="text-[#111111] font-semibold text-xl">${noakhaliDonateInput} dolar Donate for Flood at Noakhali, Bangladesh</h4>
    <small class="bg-gray-400">${new Date().toString()}</small>

    `
    const historyContainer = document.getElementById('history_container');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})

// Modal close 
document.getElementById('close').addEventListener('click', function () {
    document.getElementById('success').classList.add('hidden');
})

// history tab functionality
const history = document.getElementById('history');
const donation = document.getElementById('donation');

history.addEventListener('click', function () {
    history.classList.add('bg-lime-500', 'text-[#000]',);
    donation.classList.remove('bg-lime-500', 'text-[#000]');

    document.getElementById('donate_section').classList.add('hidden');

    document.getElementById('history_container').classList.remove('hidden')
})

donation.addEventListener('click', function () {
    history.classList.remove('bg-lime-500', 'text-[#000]',);
    donation.classList.add('bg-lime-500', 'text-[#000]');

    document.getElementById('donate_section').classList.remove('hidden');

    document.getElementById('history_container').classList.add('hidden')
})

// Blog page
document.getElementById('blog').addEventListener('click', function(){
    window.location.href = 'blog.html'
})