<script setup>
  useHead({
    title: 'Tools | HNS Directory',
  })

  const sites = await queryContent('tools').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Tools</h2>
    <p>Tools for exploring Handshake and integrating your website.</p>

    <div :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>