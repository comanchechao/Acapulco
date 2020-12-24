<template>
  <v-app>
    <div class="mb-40">
      <div class="flex justify-center">
        <form
          class="border border-gray-100 flex flex-col md:px-8 px-2 py-4 rounded"
          @submit.prevent="signInWithEmailAndPassword"
        >
          <div class="my-4 flex items-center justify-between">
            <label class="mr-3" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              name="email"
              autocomplete="username"
              required
              placeholder="john@doe.com"
              class="text-gray-800 rounded p-2"
            />
          </div>
          <div class="my-4 flex items-center justify-between">
            <label class="mr-3" for="password">Password</label>
            <input
              v-model="password"
              type="password"
              name="password"
              required
              autocomplete="current-password"
              placeholder="********"
              class="text-gray-800 rounded p-2"
            />
          </div>
          <button
            class="mt-4 px-2 py-3 border border-gray-100 rounded hover:bg-gray-900"
          >
            Sign in
          </button>
        </form>
      </div>
      <p v-if="error" class="text-red-600 mt-4 flex-grow-0 text-center">
        {{ error }}
      </p>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    error: '',
  }),
  methods: {
    signInWithEmailAndPassword() {
      this.$store
        .dispatch('SIGN_IN_WITH_EMAIL_AND_PASSWORD', {
          email: this.email,
          password: this.password,
        })
        .then(() => this.$router.push('/register'))
        .catch((e) => (this.error = e.message))
    },
  },
}
</script>

<style></style>
