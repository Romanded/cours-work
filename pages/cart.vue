<template>
  <v-skeleton-loader v-if="$fetchState.pending"></v-skeleton-loader>
  <v-container v-else>
    <v-row>
      <v-col order="2" order-sm="1" cols="12" sm="8">
        <cart-item
          v-for="product in products"
          :product="product"
          :key="product.id"
          @remove="removeItem"
        />
      </v-col>
      <v-col order="1" order-sm="2" sm="4" cols="12">
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
    const { data } = await this.$api.cart.list()
    this.products = data
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
