<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      d-flex-column
      temporary
      app
      src="/cody-mclain-Dq5P6eWZXNY-unsplash.jpg"
      width="20%"
    >
      <v-list>
        <v-spacer></v-spacer>
        <v-list-item>
          <v-app-bar-nav-icon
            app
            class="white--text"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="/pineapple-supply-co-NgDapgpAiTE-unsplash.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item v-for="category in categories" :key="category.title">
          <v-list-item-content>
            <v-btn>
              <span>
                {{ category.title }}
              </span>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      justify-center
      color="transparent"
      width="100%"
      fixed
      elevation="0"
    >
      <v-app-bar-nav-icon
        app
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <!-- <v-toolbar-title class=" black--text text-uppercase">
        <span>Acupulco </span>
        <span class="font-weight-light">Design</span>
      </v-toolbar-title> -->
      <v-spacer></v-spacer>

      <v-menu transition="slide-y-transition" bottom open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            x-large
            v-bind="attrs"
            color="transparent"
            class="mx-2"
            v-on="on"
          >
            <span class="white--text"> Explore </span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="category in categories" :key="category.title">
            <v-list-item-title>{{ category.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div>
        <v-btn dark large color="transparent">
          <v-icon> mdi-account-cowboy-hat </v-icon>
        </v-btn>
      </div>
      <div>
        <v-btn fab large color="transparent">
          <v-icon color="white">mdi-shopping-outline</v-icon>
          <span v-for="item in Cart" :key="item.Product.id">
            {{ item.Product.title }}
          </span>
        </v-btn>
        <v-menu transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  v-bind="attrs"
                  dark
                  large
                  fab
                  color="transparent"
                  v-on="{ ...tooltip, ...menu }"
                >
                  <v-icon large>mdi-login-variant</v-icon>
                </v-btn>
              </template>
              <span>Join Us!</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item>
              <SignUpDialog />
            </v-list-item>
            <v-list-item>
              <v-btn outlined color="transparent" large>
                <span class="activator hvr-fade pa-1 white--text">
                  <NuxtLink to="/Login"> Login</NuxtLink>
                </span>
              </v-btn></v-list-item
            >
          </v-list>
        </v-menu>
      </div>
      <!-- <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet> -->
    </v-app-bar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      categories: [],
      drawer: false,
    }
  },
  computed: {
    Cart() {
      return this.$store.state.Cart
    },
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/category/').then((response) => {
      this.categories = response.data
    })
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Engagement&display=swap');
#app {
}
</style>
