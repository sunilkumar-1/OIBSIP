let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const del = () => {
    display.value = display.value.slice(0, -1);
}

const show = (n) => {
    if (n === 'ans') {
        display.value += 'ans';
    } else {
        display.value += n;
    }
}

const calc = () => {
    display.value = eval(display.value);
}
