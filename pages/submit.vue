<script setup>
  const mail = useMail()

  const info = reactive({
    title: undefined,
    slug: undefined,
    url: undefined,
    icon: undefined,
    desc: undefined,
    docs: undefined,
    repo: undefined,
    owner: undefined,
    email: undefined,
    test: undefined,
    sent: false
  })

  const submit = async() => {

    let details = `

Website added from 'Submit Site' page

---
title: ${ info.title }
slug: ${ info.slug }
icon: ${ info.icon }
description: ${ info.desc }
offline: false
handshake:
url: ${ info.url }
docs: ${ info.docs }
repo: ${ info.repo }
owner: ${ info.owner }
priority: 
---

Reply to me please: ${ email }

    `

    if (info.test === undefined) {
      mail.send({
        from: 'submit@hns.directory',
        subject: info.title + ' - Site Submission',
        text: details,
      })

      info.sent = true
    }
  }

</script>

<template>
  <div class="submit">

    <ContentDoc class="content" />

    <!-- Submit form -->
    <form v-if="!info.sent" :state="info" @submit.prevent="onSubmit">
      <div class="group">
        <label for="title">Title</label>
        <input v-model="info.title" id="title" type="text" placeholder="Awesome Website" required="true" />
      </div>

      <div class="group">
        <label for="slug">Slug</label>
        <input v-model="info.slug" id="slug" type="text" placeholder="awesome" required="true" />
      </div>

      <div class="group">
        <label for="url">URL</label>
        <input v-model="info.url" id="url" type="text" placeholder="https://awesome/" required="true" />
      </div>

      <div class="group">
        <label for="icon">Icon<sub>(optional)</sub></label>
        <input v-model="info.icon" id="icon" type="text" placeholder="some.jpg" />
      </div>

      <div class="group desc">
        <label for="desc">Description<sub>(optional)</sub></label>
        <textarea v-model="info.desc" id="desc" placeholder="Short description of website and services offered" ></textarea>
      </div>

      <div class="group">
        <label for="docs">Documentation<sub>(optional)</sub></label>
        <input v-model="info.docs" id="docs" type="text" placeholder="https://docs.awesome/" />
      </div>

      <div class="group">
        <label for="repo">Git Repo<sub>(optional)</sub></label>
        <input v-model="info.repo" id="repo" type="text" placeholder="https://github.com/handsha..." />
      </div>

      <div class="group">
        <label for="owner">Website Owner<sub>(optional)</sub></label>
        <input v-model="info.owner" id="owner" type="text" placeholder="https://twitter.com/awesome_" />
      </div>

      <div class="group">
        <label for="email">E-mail<sub>(optional)</sub></label>
        <input v-model="info.email" id="email" type="email" placeholder="support@awesome.dev" />
      </div>

      <button @click="submit()" >Submit</button>
    </form>

    <div class="success" v-if="info.sent">
      <h4>🎉 Success 🎉</h4>
      <p>Your website was submitted and will be added soon. If provided, we will email you when added. Thank you for supporting our directory.</p>
    </div>

  </div>
</template>