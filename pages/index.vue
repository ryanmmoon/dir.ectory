<script setup>
  useHead({
    title: 'HNS Directory | Handshake Resources, Guides, and More',
    meta: [
      { name: 'description', content: `See what others have built in the Handshake ecosystem by searching through our directory of websites.` },      
    ],
  })
</script>

<template>
  <div class="index">
    <Sidebar index="true" />
    <div class="content">

      <!-- <IndexAlert /> -->

      <IndexIntro />
      
      <IndexCategory title="Registrars" category="registrars" />
      <IndexCategory title="Tools" category="tools" />
      <IndexCategory title="Tutorials" category="tutorials" />

      <IndexCategory title="Apps" category="apps" />
      <IndexCategory title="Domains" category="domains" />
      <IndexCategory title="Forums" category="forums" />

      <IndexCategory title="Companies" category="companies" />
      <IndexCategory title="Hosting" category="hosting" />

      <IndexCategory title="Portfolios" category="portfolios" />
      <IndexCategory title="Blogs" category="blogs" />

      <IndexCategory title="Random" category="random" />

      <!-- <IndexCategory title="" category="" /> -->

    </div>
  </div>
</template>