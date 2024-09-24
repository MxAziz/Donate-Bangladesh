
// common function for donation and history btn
function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
// -------------------------------------->


// common function for donation history card------>
function donateCard(amount, text){

    const cardContainer = document.getElementById('history-section');
    const donateCard = document.createElement('div');
    donateCard.classList.add('p-4', 'space-y-4','shadow','rounded-md','border') ;
    const date = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' } );

    donateCard.innerHTML =`
      <p class="text-lg font-bold">${amount} Taka is Donated for ${text}</p>
      <p class="text-sm ">Date: ${date}</p>` ;

    cardContainer.appendChild(donateCard);
}
// ---------------------------------->