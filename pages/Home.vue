<template>
  <v-app>
    <Navbar />
    <MainPage />
    <ProductList />
    <!-- <MiniCart /> -->
    <Footer />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/layouts/Navbar.vue'
import MainPage from '@/layouts/MainPage.vue'
import ProductList from '@/components/ProductList.vue'
import Footer from '@/layouts/Footer.vue'
// import MiniCart from '../components/MiniCart.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    MainPage,
    ProductList,
    Footer,
    // MiniCart,
  },
}
</script>

<style scoped>
/* .home-background {
    filter: blur(1px);
  -webkit-filter: blur(1px);
  } */
</style>
