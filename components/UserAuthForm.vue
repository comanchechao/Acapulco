<template>
  <v-form v-model="valid">
    <v-text-field
      v-if="hasName"
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
    />

    <v-text-field
      v-model="userInfo.email"
      label="Email"
      :rules="[required('email'), emailFormat()]"
    />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[required('password'), minLength('password', 8)]"
      @click:append="showPassword = !showPassword"
    />

    <v-btn :disabled="!valid" @click="submitForm(userInfo)">{{
      buttonText
    }}</v-btn>
  </v-form>
</template>

<script>
import validations from '@/utils/validations'
export default {
  props: { submitForm: Function, buttonText: String, hasName: Boolean },
  data() {
    return {
      valid: false,
      showPassword: false,
      //   hasName: false,
      userInfo: {
        email: '',
        password: '',
      },
      ...validations,
    }
  },
}
</script>
