const numberField = document.querySelector('.number__field__content');
const buttons = document.querySelectorAll('.calculator__buttons li');

window.addEventListener('DOMContentLoad', calculate);

function calculate() {
    buttons.forEach((btn) => {
        btn.addEventListener('click', performAction);
    });
}

function performAction() {
    
}