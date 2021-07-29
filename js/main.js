//swiper
try {
	const swiper = new Swiper(".mySwiper", {
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	const swiper2 = new Swiper(".mySwiper2", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});
} catch (e) {}

//menu hamburger
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar-panel');
const menuCloseBtn = document.querySelector('.close-menu');
if (!!menuBtn && !!menu && !!menuCloseBtn) {
	const menuToggle = () => {
		menu.classList.toggle('active');
	};
	menuBtn.addEventListener('click', menuToggle);
	menuCloseBtn.addEventListener('click', menuToggle);
}