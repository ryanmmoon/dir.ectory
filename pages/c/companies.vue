<script setup>
  useHead({
    title: 'Companies - Handshake Dir.ectory',
  })

  const sites = await queryContent('companies').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Companies</h2>
    <p>Company websites and businesses using Handshake.</p>

    <div :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>