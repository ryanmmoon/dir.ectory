<template>
  <header>
    <div class="nav">
      <NuxtLink to="/" class="logo" >
        <span class="icon-directory directory" ></span>
        <span class="hns">Handshake</span>
        <span class="dir">Dir.ectory.</span>
      </NuxtLink>
      <ul class="links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/guides">Guides</NuxtLink></li>
        <li><NuxtLink to="/docs">Docs</NuxtLink></li>
        <li><NuxtLink to="https://github.com/ryanmmoon/dir.ectory/releases" target="_Blank">Changelog</NuxtLink></li>
        <!-- <li><NuxtLink to="/blog">Blog</NuxtLink></li> -->
      </ul>
      <ul class="cta">
        <li><NuxtLink to="/submit">Submit Site</NuxtLink></li>
        <li>
          <label>
            <select v-model="$colorMode.preference">
              <option value="system" selected>System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </li>
      </ul>
    </div>
  </header>
</template>