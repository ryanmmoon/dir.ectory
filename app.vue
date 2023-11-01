<script setup>
  useHead({
    htmlAttrs: [
      { lang: 'en'}
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#f16114' },
    ],
    meta: [
      { name: 'msapplication-TileColor', content: '#f2dacd' },
      { name: 'theme-color', content: '#212121' }
    ],
    script: [
      {  defer: 'true', 'data-domain': 'dir.ectory', src: 'https://pa.inspin.co/js/latest.js' }
    ]
  })
</script>

<template>
  <Header></Header>
  <main>
    <NuxtPage/>
  </main>
  <Footer></Footer>
</template>
