const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      price: 10,
      description: 'A pair of warm socks',
      image: 'assets/greensock.jfif',
      url: 'https://communityclothing.co.uk/products/premium-cotton-sock-rib-green?srsltid=AfmBOoq4ANIkeNMYHOSZ7Hk2i9azp5OIF3Gp_vfUsGiLkXluqT21Z1Vb'
    }
  }
})

app.mount('#app')
