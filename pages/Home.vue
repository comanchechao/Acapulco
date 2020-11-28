<template>
  <v-app id="main">
    <Navbar id="navbar" />
    <v-spacer></v-spacer>
    <v-content>
      <v-container>
        <component
          :is="component"
          :class="{ animate__fadeInDownBig: ShowProducts }"
          class="animate__animated"
        ></component>
        <div v-show="ShowProducts == false" id="switch">
          <v-btn
            class="animate__animated animate__jello animate__infinite"
            color="#fadcac"
            @click=";(component = 'ProductList'), (ShowProducts = true)"
            >View Products</v-btn
          >
        </div>
      </v-container>

      <!-- <MiniCart /> -->
    </v-content>
    <!-- <MainPage /> -->
    <ProductList />
    <!-- <MiniCart /> -->
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/layouts/Navbar.vue'
import MainPage from '@/layouts/MainPage.vue'
import ProductList from '@/components/ProductList.vue'
// import Footer from '@/layouts/Footer.vue'
// import MiniCart from '../components/MiniCart.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    MainPage,
    ProductList,
    // Footer,
    // MiniCart,
  },
  data() {
    return {
      component: 'MainPage',
      ShowProducts: false,
      sheet: false,
    }
  },
  computed: {
    CartDisplay() {
      return this.$store.state.CartDisplay
    },
  },
}
</script>

<style scoped>
/* .home-background {
    filter: blur(1px);
  -webkit-filter: blur(1px);
  } */
#main {
  background-image: url('/tabitha-turner--_bSa4Sn1Bs-unsplash.jpg');
  height: 100%;
  display: block;
  background-position: center;
  background-size: cover;
  z-index: 0;
}
#switch {
  position: absolute;
  left: 43%;
  bottom: 20%;
  z-index: 1;
}
#dynamic {
  position: relative;
  top: 50%;
}
#bottomsheet {
  position: relative;
  bottom: -25%;
}
</style>
