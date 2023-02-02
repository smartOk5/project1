/* Фильтр на мобильных устройствах */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Скрытие / показ фильтра и изменения иконки
sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active'); 
};

/* Показать еще 3 карточки */
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

// Показ трех скрытых карточек по клику
btnShowMoreCards.addEventListener('click', function () {    
    hiddenCards.forEach(function(card) {
        card.classList.remove('card-link--hidden');
    })
})

/* Показать/скрыть контент внутри виджетов */
const widgets = document.querySelectorAll('.widget');

// Находим все виджеты на странице
widgets.forEach(function (widget) {

    // Слушаем клик внутри виджета
    widget.addEventListener('click', function (e) {
        // Если клик по заголовку - тогда скрываем/показываем тело виджета
        if(e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }    
    });
});

/* Location - кнопка Любая */

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

// Выбор кнопки Любая и отключение других чекбоксов
checkBoxAny.addEventListener('change', function () {    
    if(checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        });
        
    } 
})

// Отключаем кнопку "Любая" при выборе других параметров
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }         
    })
})

/* Показать еще 3 доп опции с чекбоксами в фильтре */
const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault();

    // Если блоки были скрыты - показываем
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = 'Скрыть дополнительные пункты';
        showMoreOptions.dataset.options = 'visible';
    } 
    // Если были видны - скрываем
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = 'Показать ещё';
        showMoreOptions.dataset.options = 'hidden';
    } 

}