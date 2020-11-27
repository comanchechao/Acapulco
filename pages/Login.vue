<template>
  <v-app>
    <v-container justify-center>
      <v-card>
        <UserAuthForm button-text="Submit" :submit-form="loginUser" />
      </v-card>
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
    loginUser() {
      alert("It's Working")
    },
  },
}
</script>
