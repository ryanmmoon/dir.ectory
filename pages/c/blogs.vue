<script setup>
  useHead({
    title: 'Blogs - Handshake Dir.ectory',
  })

  const sites = await queryContent('blogs').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Blogs</h2>
    <p>Blogs about anything and everthing hosted with Handshake.</p>

    <div :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>