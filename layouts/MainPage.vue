<template>
  <v-app>
    <v-main>
      <div class="pa-0 ma-0">
        <h1 class="acapulco">Acapulco Design</h1>
        <h2 class="h2-home">Limited custom handmade merchendise by</h2>
        <v-img
          class="home-background"
          max-height="900"
          src="/tabitha-turner--_bSa4Sn1Bs-unsplash.jpg"
        ></v-img>
      </div>
    </v-main>
  </v-app>
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
  backdrop-filter: blur(4px);
  color: #ffffff;
  position: absolute;
  top: 30%;
  left: 50%;
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
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #e7e7e7;
  line-height: 110%;
}
</style>
