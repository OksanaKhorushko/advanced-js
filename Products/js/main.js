const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgProduct: 'https://via.placeholder.com/200x150?text=No+image',
        cartShow: false,
        filtered: [],
    },

    components: { cart, products, filter_el },

    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
        }
    }
})
