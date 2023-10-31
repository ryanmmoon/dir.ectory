<script setup>

  const { path } = useRoute()

  const { data, error } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path, public: true }).findOne()
  })

</script>

<template>
  <div class="guide">
    <ContentDoc class="content" />
  </div>
</template>