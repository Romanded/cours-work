<template>
  <div>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$router.redirect('/products')
  }
}
</script>

<style lang="scss" scoped>

</style>
