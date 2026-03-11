const el = {
    // inputs: document.querySelectorAll('input'),
    header: document.querySelector('h1'),
    nameInput: document.querySelector('input[type=text]'),
    colorInput: document.querySelector('input[type=color]'),
};


// for (const inp of el.inputs) {
//     inp.addEventListener('change', (ev) => {
//         console.log('on change');
//     });
//     inp.addEventListener('input', (ev) => {
//         console.log('on input');
//     });
// }

el.nameInput.onchange = () => {
    // const name = ev.target.value;
    const name = el.nameInput.value;
    el.header.textContent = `Hello ${name}`;
};

el.colorInput.oninput = (ev) => {
    const color = ev.target.value;
    document.body.style.background = color;
};