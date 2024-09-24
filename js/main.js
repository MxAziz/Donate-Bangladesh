// navigate the blog.html file
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html';
})


// blur navbar---------------------------------->
window.addEventListener('scroll', function(){
    const fixedNavbar = document.getElementById('blur-navbar');

    if(window.scrollY > 30){
        fixedNavbar.classList.add( 'backdrop-blur-xl','bg-opacity-80' , 'bg-neutral-50');
        fixedNavbar.classList.remove('bg-orange-50');
    }
    else{
        fixedNavbar.classList.remove('backdrop-blur-xl' , 'bg-neutral-50');
        fixedNavbar.classList.add('bg-orange-50');
    }
})

window.addEventListener('scroll', function(){
    const fixedNavbar = document.getElementById('blur-2btn');

    if(window.scrollY > 30){
        fixedNavbar.classList.add( 'backdrop-blur-xl');
    }
    else{
        fixedNavbar.classList.remove( 'backdrop-blur-xl');
    }
})
// ----------------------------------------------------->



// noakhali donate calculation
document.getElementById('noakhali-btn').addEventListener('click', function(){

    const balance = parseFloat(document.getElementById('account-balance').innerText);
    const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);
    const noakhaliInput = document.getElementById('noakhali-input').value.trim();
    // const noakhaliInputValue = Number(noakhaliInput);

    if(noakhaliInput === '' || isNaN(noakhaliInput) || parseFloat(noakhaliInput) <= 0 || parseFloat(noakhaliInput) > balance){
        alert("Invalid Donation Amount");
    }
    else{
        const noakhaliInputValue = parseFloat(noakhaliInput);

        const newAccountBalance = balance - noakhaliInputValue;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const newNoakhaliBalance = noakhaliBalance + noakhaliInputValue ;
        document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;

        // modal code
        const modal = document.getElementById('my_modal_1').showModal();
        modal.checked = true;
    }

})

// feni donate calculation
document.getElementById('feni-btn').addEventListener('click', function(){

    const balance = parseFloat(document.getElementById('account-balance').innerText);
    const feniBalance = parseFloat(document.getElementById('feni-balance').innerText);
    const feniInput = document.getElementById('feni-input').value.trim();

    if(feniInput === '' || isNaN(feniInput) || parseFloat(feniInput) <= 0 || parseFloat(feniInput) > balance){
        alert("Invalid Donation Amount");
    }
    else{
        const feniInputValue = parseFloat(feniInput);

        const newAccountBalance = balance - feniInputValue;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const newFeniBalance = feniInputValue + feniBalance ;
        document.getElementById('feni-balance').innerText = newFeniBalance;

        // modal code
        const modal = document.getElementById('my_modal_2').showModal();
        modal.checked = true;
    }

})

// quota donate calculation
document.getElementById('quota-btn').addEventListener('click', function(){

    const balance = parseFloat(document.getElementById('account-balance').innerText);
    const quotaBalance = parseFloat(document.getElementById('quota-balance').innerText);
    const quotaInput = document.getElementById('quota-input').value.trim();


    if(quotaInput === '' || isNaN(quotaInput) || parseFloat(quotaInput) <= 0 || parseFloat(quotaInput) > balance){
        alert("Invalid Donation Amount");
    }
    else{
        const quotaInputValue = parseFloat(quotaInput);

        const newAccountBalance = balance - quotaInputValue;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const newQuotaBalance = quotaBalance + quotaInputValue ;
        document.getElementById('quota-balance').innerText = newQuotaBalance;

        // modal code
        const modal = document.getElementById('my_modal_3').showModal();
        modal.checked = true;
    }

})