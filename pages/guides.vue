<script setup>
  useHead({
    title: 'Guides - Handshake Dir.ectory',
  })

  const guides = await queryContent('guide').sort({ date: 1 }).find()
</script>

<template>
  <div class="guides">
    <h2>Handshake Guides</h2>
    <p>Discover the benefits Handshake offers and exciting possibilities.</p>

    <NuxtLink :to="'/guide/' + guide.slug" class="guide" v-for="guide in guides" :key="guide.slug">
      <h4>{{ guide.heading }}</h4>
    </NuxtLink>
  </div>
</template>