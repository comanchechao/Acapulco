<template>
  <v-app>
    <v-container>
      <h1>Register</h1>

      <UserAuthForm
        button-text="Register"
        :submit-form="registerUser"
        has-name="true"
      />
    </v-container>
  </v-app>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'

export default {
  components: {
    UserAuthForm,
  },
  methods: {
    registerUser(registrationinfo) {
      alert('You pressed a button')
    },
  },
}
</script>
