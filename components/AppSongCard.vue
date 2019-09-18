<template>
  <div class="song">
    <img
      height="100px"
      :src="song.album.cover_medium"
      alt="Deezer favourite song"
      class="song-image"
    />
    <div class="song-details">
      <h1 class="song-title">{{ song.title }}</h1>
      <div class="song-details--extra">
        <p class="song-artist">{{ song.artist.name }}</p>
        <p>·</p>
        <p class="song-length">{{ song.duration }} seconds</p>
      </div>
    </div>
    <div class="song-play-container">
      <a
        target="_blank"
        :href="`https://www.deezer.com/track/${song.id}`"
        class="song-player"
      >
        <img width="25px" src="/play-solid.svg" alt="Song play button" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-song-card",
  props: ["song"]
};
</script>
