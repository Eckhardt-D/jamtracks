<template>
  <main>
    <client-only>
      <nuxt />
    </client-only>
  </main>
</template>

<script>
export default {
  async created() {
    if (process.client) {
      await this.$store.dispatch("initialize");
    }
  }
};
</script>
