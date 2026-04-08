const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      cart: 0,
      image: 'assets/blue-socks_1200x1200 (1).png',
      url: 'https://www.tiemart.com/products/mens-blue-socks?srsltid=AfmBOooW3WTmxQ0gkGlHk1xU_JTpwq9D1mptVdFELtJyfwwmjYPBByEG',
      inStock: false,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
              { id: 2234, color: 'blue', image: 'assets/blue-socks_1200x1200 (1).png' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
app.mount('#app')
