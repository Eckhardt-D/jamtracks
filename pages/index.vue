<template>
  <div id="site-home">
    <header class="site-header">
      <h1 class="site-title">Your favourite Deezer tracks!</h1>
      <div class="header-id-finder">
        <input
          class="header-input"
          placeholder="Enter your Deezer user ID"
          type="text"
        />
        <button>Search</button>
        <p class="header-small-text">How to find it?</p>
      </div>
    </header>

    <section class="site-content">
      <h1>Results</h1>
      <div class="songs-container">
        <div v-for="song in songs" :key="song.id" class="song">
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    songs() {
      return this.$store.state.songs;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getFlow");
  }
};
</script>

<style lang="scss">
.site-header {
  height: 230px;
  text-align: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 42%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 1em 0;
  .site-title {
    margin: 1em 0;
    color: white;
  }
  .header-id-finder {
    .header-input {
      padding: 0.8em;
      min-width: 250px;
      font-size: 1.1em;
    }
    button {
      padding: 0.9em 0.87em;
      font-size: 1.1em;
      background: white;
      border: none;
      cursor: pointer;
    }
    & > .header-small-text {
      color: white;
      font-size: 0.9em;
    }
  }
}

.site-content {
  min-height: calc(100vh - 230px - 2em);
  h1 {
    margin: 0;
    text-align: center;
    margin-top: 1em;
  }

  .songs-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;

    .song {
      position: relative;
      margin: 1em auto;
      padding: 1em;
      min-height: 100px;
      display: flex;
      background: #f4f4f4;
      align-items: center;
      border-radius: 10px;
      box-shadow: 2px 2px 6px rgba(2, 0, 36, 0.3);
      .song-image {
        border-radius: 3px;
        box-shadow: 1px 1px 10px rgba(0, 212, 255, 0.5);
      }
      .song-details {
        margin-left: 2.5em;
        max-width: 400px;

        h1 {
          font-size: 1.3em;
          text-align: left;
          font-weight: 400;
          letter-spacing: 1px;
          margin: 3px 0;
          color: #333;
        }
        p {
          margin: 3px 0;
          margin-right: 5px;
          color: #333;
          font-weight: 200;
          font-size: 0.8em;
        }
        .song-details--extra {
          display: flex;
        }
      }
      .song-play-container {
        position: absolute;
        right: 2em;
      }
    }
  }
}

@media screen and (max-width: 413px) {
  .site-content > .songs-container > .song {
    padding: 2em 1em;
    flex-direction: column;
    .song-title {
      text-align: center;
    }
    .song-details {
      margin: 1em 0 3em 0;
      .song-details--extra {
        justify-content: center;
      }
    }
    .song-play-container {
      bottom: 1.5em;
      right: calc(50% - 12.5px);
    }
  }
}
</style>