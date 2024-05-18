<template>
  <v-card>
    <v-card-text>
      <v-row class="product">
        <v-col cols="12">
          <nuxt-link :to="`/products/${item.id}`">
            <v-img class="product-image" :height="250" contain :src="item.thumbnail"/>
          </nuxt-link>
        </v-col>
        <v-col cols="12">
          <nuxt-link :to="`/products/${item.id}`">{{ item.title }}</nuxt-link>
        </v-col>
        <v-col cols="7">
          <v-btn color="accent" @click="addToCart">
            В корзину
          </v-btn>
        </v-col>
        <v-col class="d-flex justify-end align-center price--text" cols="5">{{ item.price }}$</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['item'],
  methods: {
    async addToCart() {
      try {
        await this.$api.cart.create(this.item)
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product {

  &-image {
    background: #fafafa;
  }
}
</style>
