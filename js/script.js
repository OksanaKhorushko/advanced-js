'use strict'

// const headerButton = document.querySelector('.cart-button');

class GoodsList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this._fetchGoods();
        this.render();
    }

    _fetchGoods() {
        this.goods = [
            { id: 1, title: 'Shirt', price: 150, imgUrl: 'img/shirt.jpg' },
            { id: 2, title: 'Socks', price: 50, imgUrl: 'img/socks.jpg' },
            { id: 3, title: 'Jacket', price: 350, imgUrl: 'img/jacket.jpg' },
            { id: 4, title: 'Shoes', price: 250, imgUrl: 'img/shoes.jpg' },
        ]
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    getTotalPrice() {
        return this.goods.reduce((acc, product) => acc + product.price, 0);
    }
}

class ProductItem {
    constructor({
        title = 'No title',
        price = 0,
        imgUrl = 'https://via.placeholder.com/1200x1600?text=No+image',
        id,
    }) {
        this.title = title;
        this.id = id;
        this.price = price;
        this.imgUrl = imgUrl;
    }

    render() {
        return  `<div class="goods-item">
            <img src="${this.imgUrl}" alt="${this.title}"></img>
            <h3>${this.title}</h3>
            <p>${this.price}</p>
            <button class = 'buy-btn'>Добавить</button>
         </div>`
    }
}

class Cart {
    addProduct() {

    }

    removeProduct() {

    }

    changeProduct() {

    }

    render() {

    }
}

class CartItem {
    render() {

    }
}

let list = new GoodsList();
