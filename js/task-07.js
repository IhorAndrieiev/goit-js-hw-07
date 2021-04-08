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

        if (event.currentTarget.value < 41) {
        ref.textRef.style.fontSize = ' 6px'
    }
            if (event.currentTarget.value == 41) {
        ref.textRef.style.fontSize = ' 7px'
    }
            if (event.currentTarget.value == 42) {
        ref.textRef.style.fontSize = ' 8px'
    }
        if (event.currentTarget.value == 43) {
        ref.textRef.style.fontSize = ' 9px'
    }
        if (event.currentTarget.value == 44) {
        ref.textRef.style.fontSize = ' 10px'
    }
        if (event.currentTarget.value == 45) {
        ref.textRef.style.fontSize = ' 11px'
    }
        if (event.currentTarget.value == 46) {
        ref.textRef.style.fontSize = ' 12px'
    }
        if (event.currentTarget.value == 47) {
        ref.textRef.style.fontSize = ' 13px'
    }
        if (event.currentTarget.value == 48) {
        ref.textRef.style.fontSize = ' 14px'
    }
        if (event.currentTarget.value == 49) {
        ref.textRef.style.fontSize = ' 15px'
    }

    
        if (event.currentTarget.value == 50) {
        ref.textRef.style.fontSize = ' 16px'
}
    

            if (event.currentTarget.value == 51) {
        ref.textRef.style.fontSize = ' 17px'
    }
            if (event.currentTarget.value == 52) {
        ref.textRef.style.fontSize = ' 18px'
    }
            if (event.currentTarget.value == 53) {
        ref.textRef.style.fontSize = ' 19px'
    }
            if (event.currentTarget.value == 54) {
        ref.textRef.style.fontSize = ' 20px'
    }
            if (event.currentTarget.value == 55) {
        ref.textRef.style.fontSize = ' 21px'
    }
            if (event.currentTarget.value == 56) {
        ref.textRef.style.fontSize = ' 22px'
    }
            if (event.currentTarget.value == 57) {
        ref.textRef.style.fontSize = ' 23px'
    }
            if (event.currentTarget.value == 58) {
        ref.textRef.style.fontSize = ' 24px'
    }
            if (event.currentTarget.value == 59) {
        ref.textRef.style.fontSize = ' 25px'
    }
            if (event.currentTarget.value == 60) {
        ref.textRef.style.fontSize = ' 26px'
    }
            if (event.currentTarget.value == 61) {
        ref.textRef.style.fontSize = ' 27px'
    }
            if (event.currentTarget.value == 62) {
        ref.textRef.style.fontSize = ' 28px'
    }
           if (event.currentTarget.value == 63) {
        ref.textRef.style.fontSize = ' 29px'
    }
        if (event.currentTarget.value == 64) {
        ref.textRef.style.fontSize = ' 30px'
    }
        if (event.currentTarget.value == 65) {
        ref.textRef.style.fontSize = ' 31px'
    }
        if (event.currentTarget.value == 66) {
        ref.textRef.style.fontSize = ' 32px'
    }
        if (event.currentTarget.value == 67) {
        ref.textRef.style.fontSize = ' 33px'
    }
        if (event.currentTarget.value == 68) {
        ref.textRef.style.fontSize = ' 34px'
    }
        if (event.currentTarget.value == 69) {
        ref.textRef.style.fontSize = ' 35px'
    }
        if (event.currentTarget.value == 70) {
        ref.textRef.style.fontSize = ' 36px'
    }
        if (event.currentTarget.value == 71) {
        ref.textRef.style.fontSize = ' 37px'
    }
        if (event.currentTarget.value == 72) {
        ref.textRef.style.fontSize = ' 38px'
    }
        if (event.currentTarget.value == 73) {
        ref.textRef.style.fontSize = ' 39px'
    }
        if (event.currentTarget.value == 74) {
        ref.textRef.style.fontSize = ' 40px'
    }
    if (event.currentTarget.value == 75) {
        ref.textRef.style.fontSize = ' 41px'
    }
        if (event.currentTarget.value == 76) {
        ref.textRef.style.fontSize = ' 42px'
    }
        if (event.currentTarget.value == 77) {
        ref.textRef.style.fontSize = ' 43px'
    }
        if (event.currentTarget.value == 78) {
        ref.textRef.style.fontSize = ' 44px'
    }
        if (event.currentTarget.value == 79) {
        ref.textRef.style.fontSize = ' 45px'
    }
        if (event.currentTarget.value == 80) {
        ref.textRef.style.fontSize = ' 46px'
    }

    if (event.currentTarget.value > 80) {
        ref.textRef.style.fontSize = ' 47px' 
    }

 

};
