<script setup>
  const overlay = useCookie('overlay')

  overlay.value = overlay.value !== false ? true : overlay.value

  const { isDesktopOrTablet } = useDevice();

  function toggleOverlay() {
    overlay.value = false
  }
</script>

<template>
  <div v-if="overlay" class="overlay nohns" >
    <div class="info">
      <span class="icon-x" @click="toggleOverlay()"></span>
      <h1>Looks like Handshake is not configured in your browser. <br v-if="isDesktopOrTablet">Enable it using:</h1>
      <div class="resolvers">
        <div class="card">
          <NuxtLink to="https://impervious.com/fingertip" target="_BLANK">Fingertip</NuxtLink>
          <p>Menubar app, by Impervious</p>
        </div>

        <div class="card">
          <NuxtLink to="https://www.hdns.io/" target="_BLANK">HDNS</NuxtLink>
          <p>DNS resolver, by Namebase </p>
        </div>

        <div class="card">
          <NuxtLink to="https://bobwallet.io/" target="_BLANK">Bob Extension</NuxtLink>
          <p>Bob Wallet Chrome Extension</p>
        </div>
        
        <div class="card">
          <NuxtLink to="https://apps.apple.com/us/app/hnsns-handshake-resolver/id1660666457" target="_BLANK">HNSNS</NuxtLink>
          <p>iOS app, by Eskimo Software</p>
        </div>
      </div>
      <p>Once enabled, visit <NuxtLink to="https://dir.ectory" target="_BLANK">https://dir.ectory/</NuxtLink></p>
    </div>
  </div>
</template>