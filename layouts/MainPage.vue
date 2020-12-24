<template>
  <v-main>
    <v-container id="main">
      <div class="pa-0 ma-0" :class="{ animate__zoomOut: CartDisplay }">
        <h1
          class="text-center acapulco animate__animated animate__jackInTheBox animate__delay-1s"
        >
          Acapulco Design
        </h1>
        <h2
          class="h2-home animate__animated animate__flipInY animate__delay-0.5s"
        >
          Limited custom handmade merchendise by
        </h2>
        <!-- <v-img
          class="home-background"
          max-height="900"
          src="/tabitha-turner--_bSa4Sn1Bs-unsplash.jpg"
        ></v-img> -->
      </div>
    </v-container>
  </v-main>
</template>
<!-- <div class="">

</v-app>
      <h1 class="acapulco text-center"></h1>
    </div> -->

<script>
export default {
  computed: {
    CartDisplay() {
      return this.$store.state.CartDisplay
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sail&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sahitya&display=swap');

.home-background {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

.acapulco {
  font-family: sail;
  z-index: 1;
  font-size: 130px;
  /* backdrop-filter: blur(4px); */
  color: #fadcac;
  position: absolute;
  top: 10%;
  left: 8%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 90%;
}

.h2-home {
  font-size: 3.5rem;
  z-index: 1;
  font-family: 'Sahitya', serif;
  position: absolute;
  width: 764px;
  text-align: center;
  top: 50%;
  left: 15%;
  transform: translate(-50%, -50%);
  color: #fadcac;
  line-height: 110%;
}
#main {
  color: transparent;
  padding: 20%;
}
</style>
