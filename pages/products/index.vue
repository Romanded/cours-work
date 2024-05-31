<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="search"
          solo
          color="accent"
          clearable
          placeholder="Введите название товара"
          label="Поиск по названию"
          hide-details
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-autocomplete
          v-model="selectedBrands"
          :items="brandsDictionary"
          clearable
          color="accent"
          item-color='accent'
          solo
          multiple
          label="Фильтр по брендам"
          hide-details
        />
      </v-col>
      <v-col cols="12" sm="8" class="d-flex align-center">
        <v-range-slider
          v-model="price"
          strict
          max="2000"
          hide-details
          color="accent"
          track-color="tertiary"
        />
      </v-col>
      <v-col cols="6" sm="2">
        <v-text-field
          v-model.number="price[0]"
          type="number"
          outlined
          placeholder="Введите мин. цену"
          label="Мин. цена"
          color="accent"
          hide-details
          dense
        />
      </v-col>
      <v-col  cols="6" sm="2">
        <v-text-field
          v-model.number="price[1]"
          type="number"
          outlined
          placeholder="Введите макс. цену"
          label="Макс. цена"
          hide-details
          color="accent"
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        :key="item.id"
        v-for="item in list"
        cols="12"
        sm="4"
        lg="3"
      >
        <product-item :item="item"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-pagination
          v-model="page"
          :length="pages"
          color="accent"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductItem from "~/components/ProductItem.vue";

const PAGE_SIZE = 20
export default {
  components: {ProductItem},
  data() {
    return {
      products: [],
      search: '',
      page: 1,
      price: [0, 2000],
      selectedBrands: []
    }
  },
  async fetch() {
    const { data } = await this.$api.products.list()
    this.products = data.products
  },
  computed: {
    pages() {
      return Math.ceil(this.productsList.length / PAGE_SIZE)
    },
    list() {
      return this.productsList.slice((this.page - 1) * PAGE_SIZE, this.page * PAGE_SIZE)
    },
    productsList() {
      return this.products
        .filter((it) => !this.search?.length ? true : it.title.toLowerCase().includes(this.search.toLowerCase()))
        .filter((it) => this.price[0] <= it.price && it.price <= this.price[1])
        .filter(it => this.selectedBrands.length === 0 ? true : this.selectedBrands.includes(it.brand))
    },
    brandsDictionary() {
      return this.products.map(it => it.brand)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
