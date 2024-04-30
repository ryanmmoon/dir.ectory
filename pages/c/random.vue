<script setup>
  useHead({
    title: 'Random | HNS Directory',
  })

  const sites = await queryContent('random').sort({ priority: 1, offline: 1 }).find()

  const { isMobile, isDesktopOrTablet } = useDevice()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Random</h2>
    <p>Websites that don't fit in any category.</p>

    <div v-if="isDesktopOrTablet" :class="site.offline ? 'card small offline' : 'card small'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategorySmallcard :site="site" />
    </div>
    <div v-if="isMobile" :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>