const imputRef = document.querySelector('#validation-input');
console.log('imputRef',
    imputRef, imputRef.dataset.length,
    imputRef.value.length)

imputRef.addEventListener('blur', () => {
    if (imputRef.value.length == imputRef.dataset.length ) {
        imputRef.classList.add('valid');
        imputRef.classList.remove('invalid');
    } else {
        imputRef.classList.add('invalid')
        imputRef.classList.remove('valid');
    }
});

// function onInputElBlur() {
//    console.log(`Инпут потерял фокус - событие blur` ); 
// };