// Create hearts trail animation

document.addEventListener('mousemove', function(e) {
    var hero = document.querySelector('#hero');
    var heart = document.createElement('span');
    var x = e.offsetX;
    var y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    var size = Math.random() * 50;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    hero.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 2000)
})



const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > 250) {
// 		header.style.backgroundColor = '#29323c';
// 	} else {
// 		header.style.backgroundColor = 'transparent';
// 	}
// });

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});