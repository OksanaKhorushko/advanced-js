'use strict'

const headerButton = document.querySelector('.cart-button');

const goods = [
    { imgUrl: 'img/shirt.jpg', title: 'Shirt', price: 150 },
    { imgUrl: 'img/socks.jpg', title: 'Socks', price: 50 },
    { imgUrl: 'img/jacket.jpg', title: 'Jacket', price: 350 },
    { imgUrl: 'img/shoes.jpg', title: 'Shoes', price: 250 },
];

const renderGoodsItem = ({
    imgUrl = 'https://via.placeholder.com/1200x1600?text=No+image',
    title = 'No title',
    price = 0,
}) => {
    return (
        `<div class="goods-item">
            <img src="${imgUrl}" alt="${title}"></img>
            <h3>${title}</h3>
            <p>${price}</p>
            <button>Добавить</button>
        </div>`
    );
};

const renderGoodsList = (list = []) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);
