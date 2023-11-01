<script setup>
  useHead({
    title: 'Tutorials | Handshake Dir.ectory',
  })

  const sites = await queryContent('tutorials').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Tutorials</h2>
    <p>Learn how to resolve and host Handshake websites.</p>

    <div :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>