<script setup>
  useHead({
    title: 'Chapters | HNS Directory',
  })

  const sites = await queryContent('chapters').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Chapters</h2>
    <p>Groups of HNS and dweb enthusiasts who regularly meet in local areas.</p>

    <div :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>