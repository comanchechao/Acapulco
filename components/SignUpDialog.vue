<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" large v-on="on">
        <span class="pa-1 white--text"> SignIn </span>
      </v-btn>
    </template>
    <v-form
      dark
      class="signupForm px-4 py-4"
      @submit.prevent="createUserWithEmailAndPassword"
    >
      <v-text-field
        v-model="displayName"
        light
        class=""
        required
        label="Name"
      />
      <v-text-field
        v-model="email"
        light
        label="E-mail"
        type="email"
        autocomplete="username"
        required
        class=""
      />
      <v-text-field
        v-model="password"
        light
        type="password"
        required
        autocomplete
        class=""
        label="Password"
      />

      <v-btn x-large light class="my-5" type="submit">Sign up</v-btn>
      <p v-if="error" class="">
        {{ error }}
      </p>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    displayName: '',
    error: '',
  }),
  methods: {
    createUserWithEmailAndPassword() {
      this.$store
        .dispatch('CREATE_USER_WITH_EMAIL_AND_PASSWORD', {
          email: this.email,
          password: this.password,
          displayName: this.displayName,
        })
        .then(() => this.$router.push('/register'))
        .catch((e) => (this.error = e.message))
    },
  },
}
</script>

<style>
.signupForm {
  background: rgb(255, 255, 255);
}
</style>
