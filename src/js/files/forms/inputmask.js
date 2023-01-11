/* Маски для полей (в работе) */

// Подключение функционала 
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/docs/inputmask.min.js";

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	flsModules.inputmask = Inputmask().mask(inputMasks);
}