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
    const noakhaliInput = parseFloat(document.getElementById('noakhali-input').value );

    if(isNaN(noakhaliInput) || (noakhaliInput > balance)){
        alert("Invalid Donation Amount");
    }
    else{
        const newAccountBalance = balance - noakhaliInput;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const newNoakhaliBalance = noakhaliBalance + noakhaliInput ;
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
    const feniInput = parseFloat(document.getElementById('feni-input').value );

    if(isNaN(feniInput) || (feniInput > balance)){
        alert("Invalid Donation Amount");
    }
    else{
        const newAccountBalance = balance - feniInput;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const newFeniBalance = feniInput + feniBalance ;
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
    const quotaInput = parseFloat(document.getElementById('quota-input').value );

    if(isNaN(quotaInput) || (quotaInput > balance)){
        alert("Invalid Donation Amount");
    }
    else{
        const newAccountBalance = balance - quotaInput;
        document.getElementById('account-balance').innerText = newAccountBalance;

        const newQuotaBalance = quotaBalance + quotaInput ;
        document.getElementById('quota-balance').innerText = newQuotaBalance;

        // modal code
        const modal = document.getElementById('my_modal_3').showModal();
        modal.checked = true;
    }

})