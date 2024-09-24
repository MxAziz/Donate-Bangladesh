// navigate the blog html file
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html';
})


// noakhali donate calculation
document.getElementById('noakhali-btn').addEventListener('click', function(){

    const balance = parseFloat(document.getElementById('account-balance').innerText);
    const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);
    const noakhaliInput = parseFloat(document.getElementById('noakhali-input').value );

    const newAccountBalance = balance - noakhaliInput;
    document.getElementById('account-balance').innerText = newAccountBalance;

    const newNoakhaliBalance = noakhaliBalance + noakhaliInput ;
    document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;

})

// feni donate calculation
document.getElementById('feni-btn').addEventListener('click', function(){

    const balance = parseFloat(document.getElementById('account-balance').innerText);
    const feniBalance = parseFloat(document.getElementById('feni-balance').innerText);
    const feniInput = parseFloat(document.getElementById('feni-input').value );

    const newAccountBalance = balance - feniInput;
    document.getElementById('account-balance').innerText = newAccountBalance;

    const newFeniBalance = feniInput + feniBalance ;
    document.getElementById('feni-balance').innerText = newFeniBalance;

    console.log(feniBalance)
    console.log(balance)
    console.log(feniInput)

})

// quota donate calculation
document.getElementById('quota-btn').addEventListener('click', function(){

    const balance = parseFloat(document.getElementById('account-balance').innerText);
    const quotaBalance = parseFloat(document.getElementById('quota-balance').innerText);
    const quotaInput = parseFloat(document.getElementById('quota-input').value );

    const newAccountBalance = balance - quotaInput;
    document.getElementById('account-balance').innerText = newAccountBalance;

    const newQuotaBalance = quotaBalance + quotaInput ;
    document.getElementById('quota-balance').innerText = newQuotaBalance;

    console.log(balance)
    console.log(quotaBalance)
    console.log(quotaInput)

})