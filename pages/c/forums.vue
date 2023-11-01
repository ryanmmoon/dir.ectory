<script setup>
  useHead({
    title: 'Forums | Handshake Dir.ectory',
  })

  const sites = await queryContent('forums').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Forums</h2>
    <p>Forums hosted on Handshake.</p>

    <div :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>