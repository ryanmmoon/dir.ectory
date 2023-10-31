<script setup>
  useHead({
    title: 'Personal Portfolios - Handshake Dir.ectory',
  })

  const sites = await queryContent('portfolios').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Personal Portfolios</h2>
    <p>Find inspiration and learn about awesome developers, artist, photographers and many others who host portfolios using Handshake.</p>

    <div :class="site.offline ? 'card small offline' : 'card small'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategorySmallcard :site="site" />
    </div>
  </NuxtLayout>
</template>