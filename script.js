const countCard = document.querySelector('.count');
const storegeGoods = JSON.parse(localStorage.getItem('carts')) || [];

function renderTotalCard() {
    const totalCard = storegeGoods.reduce((prev, item) => {
        return prev + item.quantity;
    }, 0)

    countCard.textContent = totalCard;
};

renderTotalCard();

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('li-list')) {
       e.target.classList.toggle('active');
       const liElem = e.target.closest('.li-list');
       const textAbout = liElem.querySelector('.ptext');
       textAbout.classList.toggle('active');
    };
    
});

