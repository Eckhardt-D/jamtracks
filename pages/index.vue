<template>
  <div id="site-home">
    <app-header />
    <section v-if="songs.data && songs.data.length" class="site-content">
      <h1>Results</h1>
      <app-songs :songs="songs.data" />
    </section>
    <section v-if="dataLoaded && searchLoaded && (!songs.data || !songs.data.length)" class="site-content">
      <h1>No Results</h1>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AppHeader from "@/components/AppHeader";
import AppSongs from "@/components/AppSongs";

export default {
  name: "home",
  components: {
    AppHeader,
    AppSongs
  },
  computed: {
    songs() {
      return this.$store.state.songs.data;
    },
    dataLoaded() {
      return this.$store.state.dataLoaded;
    },
    searchLoaded() {
      return this.$store.state.searchLoaded;
    }
  }
};
</script>
