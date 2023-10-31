<script setup>
  useHead({
    title: 'Domain Portfolios - Handshake Dir.ectory',
  })

  const sites = await queryContent('domains').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Domain Portfolios</h2>
    <p>Many Handshake users have accumulated unique domains. Here are a few websites showcasing their portfolios.</p>

    <div :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>