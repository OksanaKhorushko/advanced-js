const cartItem = {
    props: ['cart_item', 'img'],
    template: `
        <div class="cart-item">
            <div class="product-bio">
                <img :src="img" alt="Some img">
                <div class="product-desc">
                    <p class="product-title">{{ cart_item.product_name }}</p>
                    <p class="product-quantity">Quantity: {{ cart_item.quantity }}</p>
                    <p class="product-single-price">$ {{ cart_item.price }}</p>
                </div>
            </div>
            <div class="right-block">
                <p class="product-price">{{cart_item.quantity*cart_item.price}}</p>
                <button class="del-btn" @click="$parent.remove(cart_item)">&times;</button>
            </div>
        </div>
    `
}

const cart = {
    components: { 'cart-item': cartItem },
    data() {
        return {
            cartUrl: '/getBasket.json',
            imgCart: 'https://via.placeholder.com/50x100?text=No+image',
            cartShown: false,
            cartItems: []
        }
    },
    methods: {
        addProduct(product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let currentProduct = this.cartItems.find(el => el.id_product === product.id_product);
                        if (currentProduct) {
                            currentProduct.quantity++
                        } else {
                            let prod = Object.assign({ quantity: 1 }, product)
                            this.cartItems.push(prod)
                        }
                    } else {
                        console.log('Some error');
                    }
                })
        },

        remove(product) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            product.quantity--
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1)
                        }
                    }
                })
        }
    },

    mounted() {
        this.$parent.getJson(`${API + this.cartUrl}`)
        .then(({ contents }) => {
            for (let el of contents) {
                this.cartItems.push(el)
            }
        })
    },

    template: `
        <div>
            <button class="cart-btn" type="button" @click="cartShown = !cartShown">??????????????</button>
            <div class="cart-block" v-show="cartShown">
                <cart-item v-for="product of cartItems"
                    :key="product.id_product"
                    :img="imgCart"
                    :cart_item="product"></cart-item>
            </div>
        </div>
    `
}
