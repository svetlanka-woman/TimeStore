Запуск и режимы работы

Имеется несколько сценариев:

Режим разработчика. Команда запуска npm run dev
Режим продакшена. Команда запуска npm run build
Режим продакшена и отправка результата на сервер по FTP. Команда запуска npm run deploy
Режим продакшена и создание ZIP-архива с результатом. Команда запуска npm run zip
Режим продакшена без создания WEBP изображений и действий связанных с этим форматом. Команда запуска npm run devbuild

Дополнительные команды:

Ручное создание SVG спрайта. Команда запуска npm run sprite
Конвертация шрифтов с принудительной перезаписью файла стилей. Команда запуска npm run fonts


Режим разработчика

В режиме разработчика выполняются только необходимые для процесса разработки задачи:

Конвертация шрифтов и запись в файл стилей
Конвертация SCSS файлов в CSS файлы, переименование псевдонимов
Сборка HTML файлов, переименование псевдонимов
При использовании PUG, файлы преобразовываются в HTML, переименовываются псевдонимы
Собираются JS файлы
Запускается локальный сервер, открывается браузер с индексной страницей.
Запускается наблюдатель за изменением фалов. При каждом изменении файла браузер обновляет страницу (кроме страницы-содержания)
Копируются файлы из указанной папки
HTML CSS JS файлы результата не записываются на диск (папка docs не создается), это увеличивает скорость работы.


Режим продакшена

В режиме продакшена выполняется финализация проекта, а именно:

Конвертация шрифтов и запись в файл стилей
Конвертация изображений в WEBP формат. Сжатие и оптимизация JPG PNG SVG картинок
Конвертация SCSS файлов в CSS файлы, переименование псевдонимов, группировка медиа-запросов, добавляются вендорные префиксы для обеспечения кроссбраузерности, обрабатывается подключение WEBP изображений, производится сжатие и оптимизация конечного файла (также создается несжатая копия)
Сборка HTML файлов, переименование псевдонимов, обрабатывается подключение WEBP изображений
При использовании PUG, файлы преобразовываются в HTML, переименовываются псевдонимы, обрабатывается подключение WEBP изображений
Собираются JS файлы, производится сжатие и оптимизация конечного файла. В результат попадает только используемый код. Итогом задачи будет создание двух файлов: сжатого app.min.js (подключен к HTML) и не сжатого app.js для дальнейшего редактирования другими специалистами.
Копируются файлы из указанной папки
Все файлы с результатом записываются на диск (обычно в папку docs), локальный сервер не запускается