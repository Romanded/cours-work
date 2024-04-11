<template>
  <v-card>
    <v-app-bar>
      <template>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-toolbar-title>Application Bar</v-toolbar-title>

      <v-toolbar-items class="d-flex align-center mr-0 ml-auto">
        <div>
          <v-btn
            class="pa-2"
            fab
            small
            text
          >
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </div>
      </v-toolbar-items>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
