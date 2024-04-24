<template>
  <v-skeleton-loader v-if="$fetchState.pending"></v-skeleton-loader>
  <v-container v-else>
    <v-row>
      <v-col cols="8">
        <cart-item
          v-for="product in products"
          :product="product"
          :key="product.id"
          @remove="removeItem"
        />
      </v-col>
      <v-col cols="4">
        <order-details/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('https://dummyjson.com/products')
    this.products = data.products
  },
  methods: {
    removeItem(id) {
      this.products = this.products.filter(it => it.id !== id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
