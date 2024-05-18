<template>
  <v-app>
    <top-bar/>
    <Nuxt/>
  </v-app>
</template>

<script>
import TopBar from "~/components/TopBar.vue";

export default {
  components: {TopBar}

}
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: var(--v-secondary-base) !important;

  &:hover {
    color: var(--v-accent-base) !important;
  }
}
</style>
