const numberField = document.querySelector('.number__field__content');
const buttons = Array.from(document.querySelectorAll('.calculator__buttons li'));

window.addEventListener('DOMContentLoaded', start);

function start() {
    buttons.forEach((btn) => {
        btn.addEventListener('click', calculate);
    });
}

function calculate() {
  
}