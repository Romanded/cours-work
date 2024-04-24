<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          solo
          clearable
          placeholder="Введите название товара"
          label="Поис по товарама"
        />
      </v-col>
      <v-col cols="12" sm="8" class="d-flex align-center">
        <v-range-slider
          v-model="price"
          strict
          max="2000"
          hide-details
        />
      </v-col>
      <v-col cols="6" sm="2">
        <v-text-field
          v-model.number="price[0]"
          type="number"
          outlined
          placeholder="Введите мин. цену"
          label="Мин. цена"
          hide-details
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
      todos: [],
      search: '',
      page: 1,
      price: [0, 2000]
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('https://dummyjson.com/products')
    this.todos = data.products
  },
  computed: {
    pages() {
      return Math.ceil(this.todosList.length / PAGE_SIZE)
    },
    list() {
      return this.todosList.slice((this.page - 1) * PAGE_SIZE, this.page * PAGE_SIZE)
    },
    todosList() {
      return this.todos
        .filter((it) => !this.search?.length ? true : it.title.toLowerCase().includes(this.search.toLowerCase()))
        .filter((it) => this.price[0] <= it.price && it.price <= this.price[1])
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
