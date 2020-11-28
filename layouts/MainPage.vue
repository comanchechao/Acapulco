<template>
  <v-content>
    <v-container id="main">
      <div class="pa-0 ma-0">
        <h1 class="acapulco">Acapulco Design</h1>
        <h2 class="h2-home">Limited custom handmade merchendise by</h2>
        <!-- <v-img
          class="home-background"
          max-height="900"
          src="/tabitha-turner--_bSa4Sn1Bs-unsplash.jpg"
        ></v-img> -->
      </div>
    </v-container>
  </v-content>
</template>
<!-- <div class="">

</v-app>
      <h1 class="acapulco text-center"></h1>
    </div> -->

<script>
export default {}
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
  font-size: 192px;
  /* backdrop-filter: blur(4px); */
  color: #e7e7de;
  position: absolute;
  top: 20%;
  left: 47%;
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
  top: 75%;
  left: 49%;
  transform: translate(-50%, -50%);
  color: #e7e7de;
  line-height: 110%;
}
#main {
  color: transparent;
  padding: 20%;
}
</style>
