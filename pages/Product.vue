<template>
  <ProductCard></ProductCard>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  components: { ProductCard },
  props: ['id'],

  computed: {
    Product() {
      return this.$store.state.Prodcut
    },
  },

  mounted() {
    this.$store.dispatch('getProduct', this.id)
  },
}
</script>
