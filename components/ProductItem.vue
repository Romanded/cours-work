<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12"><v-img :src="item.images[0]"/></v-col>
        <v-col cols="12">{{ item.title }}</v-col>
        <v-col cols="6"><v-btn color="yellow">В корзину</v-btn></v-col>
        <v-col class="d-flex justify-end orange--text" cols="6">{{ item.price }}$</v-col>
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

</style>
