
// Страница просмотра отзывов:
// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва 
// (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const arrayReviews = JSON.parse(localStorage.getItem('arrayReviews'));
const products = document.querySelector('.products');
const reviews = document.querySelector('.reviews');
function renderProdNames() {
    products.innerHTML = '';
    arrayReviews.forEach(element => {
        const template = document
            .querySelector('.temp__product')
            .content
            .cloneNode(true);
        const productName = template.querySelector('.product__name');
        productName.textContent = element.name;
        const product = template.querySelector('.product');
        setProductNameEventListener(productName);
        products.append(product);
    });
};
renderProdNames();
function setProductNameEventListener(productName) {
    productName.addEventListener('click', () => {
        renderReview(productName);
    })
};
function renderReview(productName) {
    console.log(productName);
    reviews.innerHTML = '';
    arrayReviews.forEach(element => {
        if (element.name === productName.textContent) {
            const temp = document
                .querySelector('.temp__review')
                .content
                .cloneNode(true);
            const review = temp.querySelector('.review');
            const content = temp.querySelector('.content');
            const removeBtn = temp.querySelector('.remove');
            removeBtn.id = element.id;
            setRemoveBtnEventListener(removeBtn, productName);
            content.textContent = element.text;
            reviews.append(review);
        }
    })
};
function setRemoveBtnEventListener(removeBtn, productName) {
    removeBtn.addEventListener('click', () => {
        const index = arrayReviews.findIndex(n => n.id == removeBtn.id);
        if (index !== -1) {
            arrayReviews.splice(index, 1);
        };
        localStorage.setItem('arrayReviews', JSON.stringify(arrayReviews));
        renderProdNames();
        renderReview(productName);
    })
}