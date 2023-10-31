<script setup>
  useHead({
    title: 'Applications - Handshake Dir.ectory',
  })

  const sites = await queryContent('apps').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Applications</h2>
    <p>Web apps and platforms hosted on Handshake.</p>

    <div :class="site.offline ? 'card small offline' : 'card small'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategorySmallcard :site="site" />
    </div>
  </NuxtLayout>
</template>