<script setup>
  useHead({
    title: 'Guides | HNS Directory',
  })

  const guides = await queryContent('guide').sort({ date: 1 }).find()
</script>

<template>
  <div class="blog">
    <h2>Handshake Guides</h2>
    <p>Discover the benefits Handshake offers and exciting possibilities.</p>

    <div v-for="guide in guides" class="post" :key="guide.slug">
      <NuxtLink :to="'/guide/' + guide.slug" >
        {{ guide.heading }}
      </NuxtLink>
    </div>
  </div>
</template>