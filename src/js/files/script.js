// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


setTimeout(scrollingLeftRightMenuCatalogHeader, 700);

function scrollingLeftRightMenuCatalogHeader() {
  const listMenuCatalogHeader = document.querySelector(".menu-catalog-header__list"),
    itemMenuCatalogHeader = document.querySelectorAll(".menu-catalog-header__item"),
    arrowRightMenuCatalogHeader = document.querySelector(".menu-catalog-header__arrow-right"),
    arrowLeftMenuCatalogHeader = document.querySelector(".menu-catalog-header__arrow-left"),
    containerCatalogHeader = document.querySelector(".catalog-header__container");

  const containerPadding = 40;

  let sumWidthItems = 0;

  itemMenuCatalogHeader.forEach(item => {
    const widthItem = item.getBoundingClientRect().width;
    sumWidthItems += widthItem;
  });
  
  if ((listMenuCatalogHeader.getBoundingClientRect().width + containerPadding) === containerCatalogHeader.clientWidth) {
    arrowRightMenuCatalogHeader.classList.add('arrow-active');
  }

  window.addEventListener('resize', (e) => {
    if ((listMenuCatalogHeader.getBoundingClientRect().width + containerPadding) < containerCatalogHeader.clientWidth) {
      arrowRightMenuCatalogHeader.classList.remove('arrow-active');
      arrowLeftMenuCatalogHeader.classList.remove('arrow-active');
      listMenuCatalogHeader.style.marginLeft = 0;
    } else {
      if (!arrowLeftMenuCatalogHeader.classList.contains('arrow-active')) {
        arrowRightMenuCatalogHeader.classList.add('arrow-active');
      } else {
        listMenuCatalogHeader.style.marginLeft = containerCatalogHeader.clientWidth - (sumWidthItems + containerPadding) + "px";
      }
    }
  });

  document.addEventListener("click", (e) => {
    const targetElement = e.target;

    if (targetElement.closest('.menu-catalog-header__arrow-right')) {
      listMenuCatalogHeader.style.marginLeft = containerCatalogHeader.clientWidth - (sumWidthItems + containerPadding) + "px";
      arrowRightMenuCatalogHeader.classList.toggle('arrow-active');
      arrowLeftMenuCatalogHeader.classList.toggle('arrow-active');
      e.preventDefault();
    }

    if (targetElement.closest('.menu-catalog-header__arrow-left')) {
      listMenuCatalogHeader.style.marginLeft = 0;
      arrowRightMenuCatalogHeader.classList.toggle('arrow-active');
      arrowLeftMenuCatalogHeader.classList.toggle('arrow-active');
      e.preventDefault();
    }
  });
}




