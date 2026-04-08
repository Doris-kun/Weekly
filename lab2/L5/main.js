const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      price: 10,
      image: 'assets/blue-socks_1200x1200 (1).png',
      url: 'https://www.tiemart.com/products/mens-blue-socks?srsltid=AfmBOooW3WTmxQ0gkGlHk1xU_JTpwq9D1mptVdFELtJyfwwmjYPBByEG',
      onSale: true,
      inventory: 100,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
              { id: 2234, color: 'blue' },
      ]
    }
  }
})
app.mount('#app')
