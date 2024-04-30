<script setup>
  const route = useRoute()

  const { isMobile, isDesktopOrTablet } = useDevice();

  const menu = ref(false)

  function openMenu() { menu.value = true }
  function closeMenu() { menu.value = false }
</script>

<template>
  <header>
    <div class="nav">
      <NuxtLink to="/" class="logo dark" @click="closeMenu()"><img src="/img/logo-dark.svg" alt="dir.ectory"></NuxtLink>
      <NuxtLink to="/" class="logo light" @click="closeMenu()"><img src="/img/logo-light.svg" alt="dir.ectory"></NuxtLink>
      <ul class="links" v-if="isDesktopOrTablet" >
        <li><NuxtLink to="/" :class="route.path === '/' ? 'highlight' : ''">Home</NuxtLink></li>
        <li><NuxtLink to="/guides" :class="route.path === '/guides' ? 'highlight' : ''">Guides</NuxtLink></li>
        <li><NuxtLink to="https://theshake/" target="_Blank">News</NuxtLink></li>
        <li><NuxtLink to="https://github.com/ryanmmoon/dir.ectory/releases" target="_Blank">Changelog</NuxtLink></li>
      </ul>
      <ul class="cta" v-if="isDesktopOrTablet" >
        <li><NuxtLink to="/submit" :class="route.path === '/submit' ? 'highlight' : ''">Submit Site</NuxtLink></li>
        <li>
          <label>
            <select v-model="$colorMode.preference">
              <option value="system" selected>System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </li>
      </ul>
      <div class="menu-btn" v-if="isMobile" >
        <span v-if="!menu" class="icon-menu" @click="openMenu()"></span>
        <span v-if="menu" class="icon-x" @click="closeMenu()"></span>
      </div>
      <div class="menu" v-if="menu">
        <ul class="links" @click="closeMenu()">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/guides" >Guides</NuxtLink></li>
          <li><NuxtLink to="https://github.com/ryanmmoon/dir.ectory/releases" target="_Blank">Changelog</NuxtLink></li>
          <li><NuxtLink to="/submit">Submit Site</NuxtLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>