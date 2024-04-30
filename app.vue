<script setup>
  useHead({
    htmlAttrs: [
      { lang: 'en'}
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
    meta: [
      { name: 'msapplication-TileColor', content: '#5f5e5d' },
      { name: 'theme-color', content: '#5f5e5d' },
    ],
    script: [
      {  defer: 'true', src: 'https://dir.ectory/js/hns.js' },
      {  defer: 'true', 'data-domain': 'dir.ectory', src: 'https://pa.inspin.io/js/latest.js' },
    ]
  })
</script>

<template>
  <Header></Header>
  <main>
    <NuxtPage/>
  </main>
  <Footer></Footer>
  <Overlay></Overlay>
</template>
