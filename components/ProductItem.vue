<template>
  <v-card>
    <v-card-text>
      <v-row class="product">
        <v-col cols="12"><v-img class="product-image" :height="250" contain :src="item.images[0]"/></v-col>
        <v-col cols="12">{{ item.title }}</v-col>
        <v-col cols="7"><v-btn color="#ffd129">В корзину</v-btn></v-col>
        <v-col class="d-flex justify-end align-center orange--text" cols="5">{{ item.price }}$</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['item']
}
</script>

<style lang="scss" scoped>
.product {

  &-image {
    background: #fafafa;
  }
}
</style>
