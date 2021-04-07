const ref = {
    inputRef: document.querySelector('#font-size-control'), 
    
    textRef: document.querySelector('#text')
}
console.log(ref.textRef.style)
// console.dir(ref.inputRef); // const  
//change ref.textRef.style.fontSize
//=  event.currentTarget.value;
// console.log('imputRef', ref.inputRef, ref.textRef);

ref.inputRef.addEventListener('input', onInputElChange);


function onInputElChange(event) {
  //  console.dir(event.currentTarget.value);
    if (event.currentTarget.value > 50) {
        ref.textRef.style.fontSize = ' 25px' 
    }
    if (event.currentTarget.value < 50) {
        ref.textRef.style.fontSize = ' 8px'
    }

    if (event.currentTarget.value == 50) {
        ref.textRef.style.fontSize = ' 16px'
    }
};
