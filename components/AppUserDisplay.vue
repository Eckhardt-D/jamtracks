<template>
  <div class="header-id-display">
    <img :src="user.picture" alt="" class="user-image" />
    <p class="user-name">{{ user.name }}</p>
    <a class="switch-text" @click="changeUserName">Switch accounts?</a>
  </div>
</template>

<script>
export default {
  name: "app-user-display",
  props: ["user"],
  methods: {
    changeUserName() {
      const result = window.confirm("Are you sure, this will log you out.");
      if (result) this.$store.dispatch("user/removeUser");
      this.$store.commit('songs/SET_SONGS', [])
    }
  }
};
</script>
