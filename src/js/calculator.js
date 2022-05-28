const numberField = document.querySelector('.number__field__content');
const buttons = document.querySelectorAll('.calculator__buttons li');
let invalidExpression = false;

window.addEventListener('DOMContentLoaded', start);

function start() {
    buttons.forEach((btn) => {
        btn.addEventListener('click', calculate);
    });
}

function calculate() {
    const buttonText = this.textContent;
    const numberFieldText = numberField.textContent;

    if (buttonText == 'C' || buttonText == 'AC' || buttonText == 'MC') {
        clearNumberField();

    } else if (buttonText == 'DEL') {
        const text = numberFieldText.toString();
        numberField.textContent = text.substring(0, text.length - 1);

    } else if (numberFieldText != '' && buttonText == '=') {
        try {
            numberField.textContent = eval(numberFieldText);
        } catch (error) {
            alert('Invalid Expression');
            clearNumberField();
        }

    } else if (numberFieldText == '' && buttonText == '=') {
        alert('Error!');
        clearNumberField();

    } else {
        if (numberFieldText.length == 54) {
            alert('Error!');
            clearNumberField();

        } else if (numberFieldText.length < 15) {
            numberField.classList.remove('smaller__field__size');
            
        } else {
            numberField.classList.add('smaller__field__size');
        }
        numberField.textContent += buttonText;
    }
}

function clearNumberField() {
    numberField.textContent = '';
}