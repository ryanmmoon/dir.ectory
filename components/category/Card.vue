<script setup>
  const { site } = defineProps(['site'])

  const { isDesktopOrTablet } = useDevice();
</script>

<template>
  <h4 class="name">{{ site.title }}</h4>
  <p class="desc">{{ site.description }}</p>

  <div class="links">
    <NuxtLink :to="site.url" class="url" target="_BLANK" >Visit <span class="icon-arrow"></span></NuxtLink>
    <div v-if="!site.handshake" class="icann">
      <span class="icon-alert"></span>
      <div class="tooltip"><p>This website uses a non-Handshake web address</p></div>
    </div>
    <NuxtLink :to="site.owner" v-if="site.owner" class="owner" target="_BLANK"><span class="icon-user"></span></NuxtLink>
    <NuxtLink :to="site.repo" v-if="site.repo" class="code" target="_BLANK"><span class="icon-code"></span></NuxtLink>
  </div>

  <div v-if="isDesktopOrTablet" class="icon">
    <img :src="'/img/icons/' + site.icon" v-if="site.icon" width="96" height="96" alt="" />
  </div>
</template>