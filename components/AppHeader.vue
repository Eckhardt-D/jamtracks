<template>
  <header class="site-header">
    <div v-if="!loaded" class="loader">Loading...</div>
    <div v-if="dataLoaded && loaded" class="site-header-content">
      <h1 class="site-title">Your favourite Deezer tracks!</h1>
      <app-user-search v-if="!user" />
      <app-user-display :user="user" v-else />
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import AppUserSearch from "@/components/AppUserSearch";
import AppUserDisplay from "@/components/AppUserDisplay";

export default {
  name: "app-header",
  components: {
    AppUserSearch,
    AppUserDisplay
  },
  computed: {
    user() {
      return this.$store.state.user.data;
    },
    dataLoaded() {
      return this.$store.state.dataLoaded;
    },
    loaded() {
      return this.$store.state.searchLoaded
    }
  }
};
</script>
