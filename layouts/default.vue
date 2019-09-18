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
    await this.$store.dispatch("initialize")
  }
};
</script>
