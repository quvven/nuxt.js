<template>
  <div class="container">
    <h3 class="title">Ürün Özeti</h3>
    <p class="subtitle"> Ürün ID Bilgisi : {{ $route.params.productId }}</p>
    <nuxt-link tag="a" to="/product/edit/{{ $route.params.productId }}"> Düzenle</nuxt-link>
  </div>
</template>
<style scoped>
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    margin-top: 10px;
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .container {
    min-height: 100vh;
    text-align: center;
    margin-top: 50px;
  }
</style>
