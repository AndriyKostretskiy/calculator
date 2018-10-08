(function() {
    const display = document.querySelector('.display');
    let memory;

    document.querySelectorAll('.digits, .operators')
        .forEach(el => el.addEventListener('click', e => display.value += e.target.innerText));

    document.querySelector('.equal')
            .addEventListener('click', () => (eval(display.value) === Infinity || eval(display.value) === -Infinity) ?
                                              display.value = 'It is impossible!' :
                                              display.value = eval(display.value));

    document.querySelector('.delete-last-number')
        .addEventListener('click', () => display.value = display.value.substring(0, result.length - 1)); 

    document.querySelector('.clear')
        .addEventListener('click', () => display.value = '');       

    document.querySelector('.degree-two')
        .addEventListener('click', () => display.value = Math.pow(display.value, 2)); 

    document.querySelector('.degree-three')
        .addEventListener('click', () => display.value = Math.pow(display.value, 3)); 

    document.querySelector('.square')
        .addEventListener('click', () => display.value = Math.sqrt(display.value));   

    document.querySelector('.plus-minus')
        .addEventListener('click', () => display.value = -display.value);    

    document.querySelector('.memory-read')
        .addEventListener('click', () => display.value += memory); 

    document.querySelector('.memory-save')
        .addEventListener('click', () => memory = display.value);

    document.querySelector('.memory-clear')
        .addEventListener('click', () => memory = '');

    document.querySelector('.piConstant')
        .addEventListener('click', () => display.value += Math.PI.toFixed(2));    
})();
