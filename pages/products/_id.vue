<template>
  <v-container>
    <v-row v-if="product">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ product.title }}
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <v-row>
                  <v-col cols="12" sm="2" class="d-flex flex-column justify-space-between">
                    <v-row>
                      <v-col
                        cols="3"
                        sm="12"
                        v-for="item in product.images"
                        :key="item"
                        class="d-flex align-center"
                      >
                        <v-img contain :src="item"/>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col class="carousel-container" cols="12" sm="10">
                    <v-carousel show-arrows-on-hover hide-delimiters>
                      <v-carousel-item contain v-for="item in product.images" :key="item" :src="item"/>
                    </v-carousel>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="6">
                <v-container fill-height class="align-content-space-between secondary--text">
                  <v-row>
                    <v-col cols="12" class="text-subtitle-1">Цена:
                      <span class="price--text font-weight-bold">{{ product.price }}$</span>
                    </v-col>
                    <v-col cols="12" class="text-subtitle-1 secondary--text">Бренд:
                      <span class="font-weight-bold">{{ product.brand }}</span>
                    </v-col>
                    <v-col cols="12" class="d-flex">
                      <v-rating
                        v-model="product.rating"
                        half-increments
                        hover
                        color="price"
                        background-color="price"
                      />
                      {{ product.rating }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="product.count"
                        type="number"
                        solo
                        label="Введите количество продукта"
                        hide-details
                        :max="product.stock"
                      />
                    </v-col>
                    <v-col cols="12" class="d-flex justify-space-between">
                      <v-btn
                        color="accent"
                      >
                        Оформить
                      </v-btn>
                      <v-btn
                        color="accent"
                        @click="addToCart()"
                      >
                        Добавить в корзину
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <div class="description">
                        {{ product.description }}
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      product: null
    }
  },
  async fetch() {
    try {
      const { data } = await this.$api.products.read(this.$route.params.id)
      this.product = data
    } catch (e) {
      console.log(e.message)
    }
  },
  methods: {
    async addToCart() {
      try {
        await this.$api.cart.create(this.product)
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-container {
  display: flex;
  align-items: center;
  background: var(--v-tertiary-base);
}

.description {
  background: var(--v-tertiary-base);
  padding: 10px;
  border-radius: 10px;
}
</style>
