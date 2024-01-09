const icon = document.querySelector('.burger-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});
// =================================================================================================================
const links = document.querySelectorAll('.menu__item--icon');

links.forEach((link) => {
    link.addEventListener('click', () => {
        link.classList.toggle('sub-open');
    });
});