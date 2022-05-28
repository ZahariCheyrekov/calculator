const numberField = document.querySelector('.number__field__content');
const buttons = document.querySelectorAll('.calculator__buttons li');

window.addEventListener('DOMContentLoad', start);

function start() {
    buttons.forEach((btn) => {
        btn.addEventListener('click', calculate);
    });
}

function calculate() {

}