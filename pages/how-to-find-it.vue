<template>
  <main class="find-content">
    <h1>How to find your Deezer user ID</h1>
    <h3>From the Deezer app:</h3>
    <ul>
      <li>
        <p>Step 1: Login to your Deezer account.</p>
      </li>
      <li>
        <p>Step 2: Click on 'My Music'.</p>
      </li>
      <li>
        <p>Step 3: Click on the gear icon at the top of the screen.</p>
      </li>
      <li>
        <p>Step 4: Click on 'My Account'</p>
      </li>
    </ul>
    <p>
      You User ID should be displayed there. This is the number you'll enter
      into the search box, your device will remember you.
    </p>

    <h3>From the Deezer website:</h3>
    <ul>
      <li>
        <p>
          Step 1: Login to your Deezer account at
          <a target="_blank" href="https://deezer.com">https://deezer.com</a>.
        </p>
      </li>
      <li>
        <p>
          Step 2: Click on your profile image at the top and select your user
          name.
        </p>
      </li>
      <li>
        <p>
          Step 3: Your ID will be visible in the browser's URL bar e.g.
          'deezer.com/en/profile/{ YOUR USER ID }'
        </p>
      </li>
    </ul>
    <p>
      This is the number you'll enter into the search box, your device will
      remember you.
    </p>
    <a href="/">Go home</a>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.find-content {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1em;

  & > h1 {
    text-align: center;
  }

  & > p:last-of-type {
    margin-bottom: 2em;
  }
}
</style>