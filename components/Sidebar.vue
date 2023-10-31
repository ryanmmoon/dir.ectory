<script setup>
  const route = useRoute()
</script>

<template>
  <ul class="sidebar">
    <li>
      <label>Getting Started</label>
      <ul class="subcategory">
        <li><NuxtLink to="/c/registrars/" :class="route.path === '/c/registrars/' ? 'highlight' : ''">
          <span class="icon-handshake"></span><p>Registrars</p></NuxtLink></li>
        <li><NuxtLink to="/c/tools/" :class="route.path === '/c/tools/' ? 'highlight' : ''">
          <span class="icon-tools"></span><p>Tools</p></NuxtLink></li>
        <li><NuxtLink to="/c/tutorials/" :class="route.path === '/c/tutorials/' ? 'highlight' : ''">
          <span class="icon-tutorials"></span><p>Tutorials</p></NuxtLink></li>
      </ul>
    </li>
    <li>
      <label>Community</label>
      <ul class="subcategory">
        <li><NuxtLink to="/c/apps/" :class="route.path === '/c/apps/' ? 'highlight' : ''">
          <span class="icon-apps"></span><p>Apps</p></NuxtLink></li>
        <li><NuxtLink to="/c/domains/" :class="route.path === '/c/domains/' ? 'highlight' : ''">
          <span class="icon-domains"></span><p>Domains</p></NuxtLink></li>
        <li><NuxtLink to="/c/forums/" :class="route.path === '/c/forums/' ? 'highlight' : ''">
          <span class="icon-forums"></span><p>Forums</p></NuxtLink></li>
        <!--
          <li><NuxtLink to="/c/social/" :class="route.path === '/c/social/' ? 'highlight' : ''">
            <p>Social</p></NuxtLink></li>
        -->
      </ul>
    </li>
    <li>
      <label>Professional</label>
      <ul class="subcategory">
        <li><NuxtLink to="/c/hosting/" :class="route.path === '/c/hosting/' ? 'highlight' : ''">
          <span class="icon-hosting"></span><p>Hosting</p></NuxtLink></li>
        <li><NuxtLink to="/c/companies/" :class="route.path === '/c/companies/' ? 'highlight' : ''">
          <span class="icon-companies"></span><p>Companies</p></NuxtLink></li>
        <!--
          <li><NuxtLink to="/c/news/" :class="route.path === '/c/news/' ? 'highlight' : ''">
            <span class="icon-news"></span><p>News</p></NuxtLink></li>
        -->
      </ul>
    </li>
    <li>
      <label>Personal</label>
      <ul class="subcategory">
        <li><NuxtLink to="/c/portfolios/" :class="route.path === '/c/portfolios/' ? 'highlight' : ''">
          <span class="icon-portfolio"></span><p>Portfolios</p></NuxtLink></li>
        <li><NuxtLink to="/c/blogs/" :class="route.path === '/c/blogs/' ? 'highlight' : ''">
          <span class="icon-blog"></span><p>Blogs</p></NuxtLink></li>
          <!--
            <li><NuxtLink to="/c/landing-pages/" :class="route.path === '/c/landing-pages/' ? 'highlight' : ''">
              <span class="icon-landing"></span><p>Landing Pages</p></NuxtLink></li>
          -->
      </ul>
    </li>
    <li>
      <label>Misc</label>
      <ul class="subcategory">
        <!--
          <li><NuxtLink to="/c/onboarding/" :class="route.path === '/c/onboarding/' ? 'highlight' : ''">
            <p>Onboarding</p></NuxtLink></li>
          <li><NuxtLink to="/c/articles/" :class="route.path === '/c/articles/' ? 'highlight' : ''">
            <p>Articles</p></NuxtLink></li>
        -->
        <li><NuxtLink to="/c/random/" :class="route.path === '/c/random/' ? 'highlight' : ''">
          <span class="icon-random"></span><p>Random</p></NuxtLink></li>
      </ul>
    </li>
    
    
  </ul>
</template>