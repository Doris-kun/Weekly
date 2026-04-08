const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      price: 10,
      description: 'A pair of warm socks',
      image: 'assets/blue-socks_1200x1200 (1).png',
      url: 'https://www.tiemart.com/products/mens-blue-socks?srsltid=AfmBOooW3WTmxQ0gkGlHk1xU_JTpwq9D1mptVdFELtJyfwwmjYPBByEG',
      onSale: true
    }
  }
})

app.mount('#app')
