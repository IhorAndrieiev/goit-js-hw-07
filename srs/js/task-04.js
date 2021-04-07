


//const decrementBtn = document.querySelector('[data-action="decrement"]');
//const lableSpan = document.querySelector('h1 > span')
//const incrementBtn = document.querySelector('[data-action="increment"]');
//console.log(decrementBtn);
//console.log(lableSpan);
//console.log(incrementBtn);
//const counterValue = 0;
//const step = 1;
const counterPlugin = function ({
    rootSelector,
    counterValue = 0,
    step = 1,
} = {}) {
    //this._rootSelector = rootSelector;
    this._value = counterValue;
    this._step = step;
    this._refs = this._getRefs(rootSelector);

    this._bindEvents();
    this.updateValueNumberUI();
};

counterPlugin.prototype._getRefs = function (rootSelector) {
    //console.log(rootSelector)
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    //console.log(refs.container);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value'); //'h1 > span'
    // console.log(refs.incrementBtn);
    //console.log(refs.decrementBtn);
    //console.log(refs.lableSpan)
    
    return refs;
};

counterPlugin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        //console.log('counterPlugin.prototype._bindEventsr ~ this', this);
        this.increment();
        this.updateValueNumberUI();
    })
    
    this._refs.decrementBtn.addEventListener('click', () => {
        //console.log('counterPlugin.prototype._bindEventsr ~ this', this);
        this.decrement();
        this.updateValueNumberUI();
    })
};

counterPlugin.prototype.updateValueNumberUI = function () {
    this._refs.value.textContent = this._value;
}

counterPlugin.prototype.increment = function () {
    this._value += this._step;
};

counterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};

//const counter =
new counterPlugin({ rootSelector: '#counter', step: 1, counterValue: 0 });


//console.log();
 //console.log(counter);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter);
// console.log();
// decrementBtn.addEventListener('click', event => {
//     console.log('click');
//     console.log(event);
// });

// incrementBtn.addEventListener('click', event => {
//     console.log('click');
//     console.log(event);
// });
// decrementBtn.addEventListener('click',handleDecrementBtnClick);
    
// incrementBtn.addEventListener('click',handleIncrementBtnClick);

        
// function handleDecrementBtnClick(event) { 
//     console.log('click');
//     console.dir(event.currentTarget);
//     //lableSpan.textContent = event.curentTarget.value;
// };

// function handleIncrementBtnClick(event) {
//     console.log('click');
//     console.dir(event.currentTarget.value);
// };

//const counterValue = 0;