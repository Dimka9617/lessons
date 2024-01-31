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
// =================================================================================================
document.querySelectorAll('.spoiler').forEach(function (spoiler) {
	spoiler.addEventListener('toggle', function () {
	  if (this.open) {
		 // Додати клас 'spoiler-open' при відкритті спойлера
		 this.classList.add('spoiler-open');
	  } else {
		 // Видалити клас 'spoiler-open' при закритті спойлера
		 this.classList.remove('spoiler-open');
	  }
	});
 });