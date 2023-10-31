<script setup>
  const { site } = defineProps(['site'])
</script>

<template>
  <h4 class="name">{{ site.title }}</h4>
  <p class="desc">{{ site.description }}</p>

  <div class="links">
    <NuxtLink :to="site.repo" v-if="site.repo" class="code" target="_BLANK"><span class="icon-code"></span></NuxtLink>
    <NuxtLink :to="site.owner" v-if="site.owner" class="owner" target="_BLANK"><span class="icon-user"></span></NuxtLink>
    <div v-if="!site.handshake" class="icann">
      <span class="icon-alert"></span>
      <div class="tooltip"><p>This website uses a non-Handshake web address</p></div>
    </div>
    <NuxtLink :to="site.url" class="url" target="_BLANK" >Visit <span class="icon-arrow"></span></NuxtLink>
  </div>
</template>