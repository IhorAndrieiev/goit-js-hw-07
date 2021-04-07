


// const inputEl = document.querySelector('input#name-input');
// console.log(inputEl);
// const helloEl = document.querySelector('h1 > span');
// console.log(helloEl);

const refs = {
    inputEl: document.querySelector('input#name-input'),
    helloEl: document.querySelector('h1 > span')
}; console.log(refs);
// refs.inputEl.addEventListener('focus', onInputElFocus);
// refs.inputEl.addEventListener('blur', onInputElBlur);
//refs.inputEl.addEventListener('change', onInputElChange);

refs.inputEl.addEventListener('input', onInputElChange);

function onInputElFocus() {
   console.log(`Инпут получил фокус - событие focus` ); 
};

function onInputElBlur() {
   console.log(`Инпут потерял фокус - событие blur` ); 
};

function onInputElChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value.length < 1) {
        refs.helloEl.textContent = 'незнакомец';
    } else {
        refs.helloEl.textContent = event.currentTarget.value
    }
    
};