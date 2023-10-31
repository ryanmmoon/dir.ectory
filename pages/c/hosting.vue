<script setup>
  useHead({
    title: 'Hosting - Handshake Dir.ectory',
  })

  const sites = await queryContent('hosting').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Hosting</h2>
    <p>Server and website hosting services.</p>

    <div :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>