const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      brand: 'L8',
      cart: 0,
      selectedVariant: 0,
      url: 'https://www.tiemart.com/products/mens-blue-socks?srsltid=AfmBOooW3WTmxQ0gkGlHk1xU_JTpwq9D1mptVdFELtJyfwwmjYPBByEG',
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
              { id: 2234, color: 'green', image: 'assets/greensock.png', quantity: 50 },
              { id: 2235, color: 'blue', image: 'assets/blue-socks_1200x1200 (1).png', quantity: 0 },
            ],
         onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
})
app.mount('#app')
