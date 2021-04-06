


const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(decrementBtn);
console.log(incrementBtn);

decrementBtn.addEventListener('click', event => {
    console.log('click');
    console.log(event);
});

incrementBtn.addEventListener('click', event => {
    console.log('click');
    console.log(event);
});

function handleDecrementBtnClick() { 
    console.log('click');
};

function handleIncrementBtnClick() {
    console.log('click');
};

const counterValue = 0;