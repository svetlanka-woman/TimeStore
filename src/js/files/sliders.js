/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.main-slider__slider')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-slider__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'bullets',
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.slider-brends__slider')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-brends__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			grabCursor: true,
			// freeMode: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				496: {
					slidesPerView: 2.5,
					spaceBetween: 16,
				},
				590: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				684: {
					slidesPerView: 3.5,
					spaceBetween: 16,
				},
				780: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
				970: {
					slidesPerView: 5,
					spaceBetween: 16,
				},
				1160: {
					slidesPerView: 6,
					spaceBetween: 16,
				},
			},
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.slider-best-offers__slider')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-best-offers__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1.5,
			spaceBetween: 8,
			// autoHeight: true,
			speed: 800,
			// grabCursor: true,
			// freeMode: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			
			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты

			breakpoints: {
				488: {
					slidesPerView: 2,
				},
				610: {
					slidesPerView: 2.5,
				},
				742: {
					slidesPerView: 3,
				},
				882: {
					slidesPerView: 3.5,
				},
				1028: {
					slidesPerView: 4,
				},
				1165: {
					slidesPerView: 4.5,
				},
				1290: {
					slidesPerView: 5,
				},
			},
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.slider-sale__slider')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-sale__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1.5,
			spaceBetween: 8,
			// autoHeight: true,
			speed: 800,
			// grabCursor: true,
			// freeMode: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			
			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты

			breakpoints: {
				488: {
					slidesPerView: 1,
				},
				610: {
					slidesPerView: 1.5,
				},
				742: {
					slidesPerView: 2,
				},
				882: {
					slidesPerView: 2.5,
				},
				1028: {
					slidesPerView: 3,
				},
				1165: {
					slidesPerView: 3.5,
				},
				1290: {
					slidesPerView: 4,
				},
			},
			// События
			on: {

			}
		});
	}
	
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});