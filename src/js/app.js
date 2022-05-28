const body = document.querySelector('body');
const mainContainer = document.querySelector('.container');
const icons = document.querySelectorAll('.dark__light__icon li');

window.addEventListener('DOMContentLoaded', start);

function start() {
    changeTheme();
}

function changeTheme() {
    let moonIcon = icons[0];
    let sunIcon = icons[1];

    sunIcon.style.display = 'none';

    icons.forEach((icon) => {
        icon.addEventListener('click', () => {

            if (moonIcon.style.display = moonIcon.style.display == '') {
                moonIcon.style.display = 'none';
            } else {
                moonIcon.style.display = '';
                body.classList.remove('dark__theme');
                mainContainer.classList.remove('dark__theme');
            }

            if (sunIcon.style.display = sunIcon.style.display == '') {
                sunIcon.style.display = 'none';
            } else {
                sunIcon.style.display = '';
                body.classList.add('dark__theme');
                mainContainer.classList.add('dark__theme');
            }

            body.style.transition = '2s';
        });
    });
}
