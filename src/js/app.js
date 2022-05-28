const body = document.querySelector('body');
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
            moonIcon.style.display = moonIcon.style.display == ''
                ? moonIcon.style.display = 'none'
                : moonIcon.style.display = '';

            sunIcon.style.display = sunIcon.style.display == ''
                ? sunIcon.style.display = 'none'
                : sunIcon.style.display = '';
        });
    });
}
