const body = document.querySelector('body');
const mainContainer = document.querySelector('.container');
const icons = document.querySelectorAll('.dark__light__icon li');

window.addEventListener('DOMContentLoaded', changeTheme);

function changeTheme() {
    let moonIcon = icons[0];
    let sunIcon = icons[1];

    sunIcon.style.display = 'none';

    icons.forEach((icon) => {
        icon.addEventListener('click', () => {

            if (icon.classList.contains('moon__icon')) {
                body.classList.add('dark__theme');
                mainContainer.classList.add('dark__theme');
                moonIcon.style.display = 'none';
                sunIcon.style.display = '';

            } else if (icon.classList.contains('sun__icon')) {
                body.classList.remove('dark__theme');
                mainContainer.classList.remove('dark__theme');
                moonIcon.style.display = '';
                sunIcon.style.display = 'none';
            }

            body.style.transition = '2s';
        });
    });
}
