// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. 
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

const products = document.querySelector('.products');
const inputName = document.querySelector('.form__name');
const inputText = document.querySelector('.form__text');
const submit = document.querySelector('.submit');
const arrayReviews = [];
let count = 1;
submit.addEventListener("click", (e) => {
    e.preventDefault();
    arrayReviews.push(getReview());
    localStorage.setItem('arrayReviews', JSON.stringify(arrayReviews));
    renderReview();
});
function getReview() {
    const _obj = {};
    _obj.name = inputName.value;
    _obj.text = inputText.value;
    _obj.id = count;
    count++;
    return _obj
};
function renderReview() {
    products.innerHTML = '';
    arrayReviews.forEach(element => {
        const template = document
            .querySelector('.temp')
            .content
            .cloneNode(true);
        template.querySelector('.product__name').textContent = element.name;
        template.querySelector('.product__text').textContent = element.text;
        const product = template.querySelector('.product');
        products.append(product);
    });
};
