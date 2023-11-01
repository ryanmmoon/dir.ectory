<script setup>
  useHead({
    title: 'Registrars | Handshake Dir.ectory',
  })

  const sites = await queryContent('registrars').sort({ priority: 1, offline: 1 }).find()

  const layout = "category";
</script>

<template>
  <NuxtLayout :name="layout">
    <h2>Registrars</h2>
    <p>Places to register Handshake Top Level and Second Level Domains.</p>

    <div :class="site.offline ? 'card offline' : 'card'" v-for="site in sites" :id="site.slug" :key="site.slug">
      <CategoryCard :site="site" />
    </div>
  </NuxtLayout>
</template>