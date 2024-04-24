<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="4"><v-img class="img" height="160" contain :src="product.images[0]"></v-img></v-col>
        <v-col class="d-flex justify-end align-center" cols="7">
          <v-row>
            <v-col>
              <v-row>
                <v-col class="text-h5" cols="12">{{ product.title }}</v-col>
                <v-col cols="12" class="orange--text">{{ product.price }}$</v-col>
              </v-row>
            </v-col>
            <v-col class="d-flex align-end">
              <v-btn small class="mr-4" @click="count -= 1">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
                {{ count }}
              <v-btn small class="ml-4" @click="count += 1">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="d-flex align-start justify-end" cols="1">
          <v-btn @click="remove" text color="red">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['product'],
  data() {
    return {
      count: 0
    }
  },
  methods: {
    remove() {
      this.$emit('remove', this.product.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  background: #fafafa;
}
</style>
