// задание 1
const  buttons = document.querySelectorAll('.btn');

buttons.forEach(buttons => {
    buttons.addEventListener('click',function () {
        console.log('clicker!!!')

    })
})

// задание 2
const btns = document.querySelectorAll
('.counter__btn');

btns.forEach( btn => {
    btn.addEventListener('click',function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement
            .querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;

        if (direction === 'plus') {
            newValue = currentValue + 1;
        }else {
            newValue =currentValue - 1 > 0 ?
                currentValue - 1 : 0;
        }
        inp.value = newValue;

    })
})







