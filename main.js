function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const isActive = menuItems.classList.contains('active');

    if (isActive) {
        menuItems.classList.remove('active');
    } else {
        menuItems.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu');

    burgerIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
        burgerIcon.classList.toggle('change');
    });
    menu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            burgerIcon.classList.remove('change');
        });
    });
});