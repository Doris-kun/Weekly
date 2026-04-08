const app = Vue.createApp({
  data() {
    return {
      product: 'Hello Vue!',
      description: 'This is my first Vue 3 app using CDN.'
    }
  }
})

app.mount('#app')
