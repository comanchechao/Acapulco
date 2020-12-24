<template>
  <v-app>
    <v-container>
      <v-layout v-if="error" row>
        <v-flex xs12 sm6 offset-sm3>
          <app-alert :text="error.message" @dismissed="onDismissed"></app-alert>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignup">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        id="email"
                        v-model="email"
                        name="email"
                        label="Email"
                        type="email"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        id="password"
                        v-model="password"
                        name="password"
                        label="Password"
                        type="password"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        id="confirmPassword"
                        v-model="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        :rules="[comparePasswords]"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <div class="text-xs-center">
                        <v-btn rounded type="submit">
                          Sign up
                          <v-icon right></v-icon>
                          <span slot="loader" class="custom-loader">
                            <v-icon light>cached</v-icon>
                          </span>
                        </v-btn>
                      </div>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
    error: '',
  }),
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? 'Passwords do not match'
        : ''
    },
  },
  methods: {
    onSignup() {
      console.log('its here')
      this.$store
        .dispatch('signUserUp', {
          email: this.email,
          password: this.password,
          // displayName: this.displayName,
        })
        .then(() => {
          console.log('its here')
          this.$router.push('/login')
        })
        .catch(() => console.log('its here'))
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
@import url('http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin');
/* .main {
  background-image: url('/picture4.jpg');
  height: 100%;
  display: block;
  background-position: center;
  background-size: cover;
  z-index: 0;
}
.signupH2 {
  color: rgb(42, 42, 42);
  text-align: center;
  font-family: Ubuntu;
  z-index: 1;
  font-size: 55px;
  top: 50px;
  position: absolute;
}
.signUp {
  width: 400px;
  height: 500px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  z-index: 0;
}
.signupForm {
  width: 300px;
} */
</style>
