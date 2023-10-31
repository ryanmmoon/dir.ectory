<script setup>
  const { title, category } = defineProps(['title', 'category'])

  const sites = await queryContent(category).where({ offline: false }).sort({ priority: 1 }).find()
</script>

<template>
  <h3>{{title}}</h3>
  <NuxtLink :to="'/c/' + category + '/#' + site.slug" class="card" v-for="site in sites" :key="site.slug">
    <h4>{{ site.title }} <span class="icon-arrow-circle"></span></h4>
  </NuxtLink>
</template>