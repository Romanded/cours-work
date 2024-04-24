<template>
  <v-card>
    <v-card-title>Детали заказа</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" class="d-flex text-subtitle-1">
          <span>1 товар</span>
          <div class="flex-fill line"></div>
          <span>549$</span>
        </v-col>
        <v-col cols="12" class="d-flex text-subtitle-1">
          <span>Скидка</span>
          <div class="flex-fill line"></div>
          <span>-10$</span>
        </v-col>
        <v-col cols="12" class="d-flex text-h6 font-weight-bold mb-4">
          <span>Итого</span>
          <div class="flex-fill line"></div>
          <span>539$</span>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-btn color="accent">Перейти к оформлению</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'OrderDetails'
}
</script>

<style lang="scss" scoped>
.line {
  border-bottom: 1px solid #dcdcdc;
}
</style>
