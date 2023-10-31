<script setup>
  const mail = useMail()

  const title = ref('')
  const slug = ref('')
  const url = ref('')
  const icon = ref('')

  const desc = ref('')

  const docs = ref('')
  const repo = ref('')
  const owner = ref('')
  const email = ref('')

  const submit = async() => {

    let details = `

      Website added from 'Submit Site' page

      ---
      title: ${ title.value }
      slug: ${ slug.value }
      icon: ${ icon.value }
      description: ${ desc.value }
      offline: false
      handshake:
      url: ${ url.value }
      docs: ${ docs.value }
      repo: ${ repo.value }
      owner: ${ owner.value }
      priority: 
      ---

      Reply to me please: ${ email.value }

      Best,
      Dir.ectory Submission Form esq.

    `

    // console.log(details)

    mail.send({
      from: 'submit@hns.directory',
      subject: title.value + ' - Site Submission',
      text: details,
    })
  }

</script>

<template>
  <div class="submit">

    <ContentDoc class="content" />

    <!-- Submit form -->
    <form @submit.prevent="onSubmit">
      <div class="group">
        <label for="title">Title<span aria-hidden="true">*</span></label>
        <input v-model="title" id="title" type="text" placeholder="Awesome Website" required="true" />
      </div>

      <div class="group">
        <label for="slug">Slug<span aria-hidden="true">*</span></label>
        <input v-model="slug" id="slug" type="text" placeholder="awesome" required="true" />
      </div>

      <div class="group">
        <label for="url">URL<span aria-hidden="true">*</span></label>
        <input v-model="url" id="url" type="text" placeholder="https://awesome/" required="true" />
      </div>

      <div class="group">
        <label for="icon">Icon<sub>(optional)</sub></label>
        <input v-model="icon" id="icon" type="text" placeholder="some.jpg" />
      </div>

      <div class="group desc">
        <label for="desc">Description<sub>(optional)</sub></label>
        <textarea v-model="desc" id="desc" placeholder="Short description of website and services offered" ></textarea>
      </div>

      <div class="group">
        <label for="docs">Documentation<sub>(optional)</sub></label>
        <input v-model="docs" id="docs" type="text" placeholder="https://docs.awesome/" />
      </div>

      <div class="group">
        <label for="repo">Git Repo<sub>(optional)</sub></label>
        <input v-model="repo" id="repo" type="text" placeholder="https://github.com/handsha..." />
      </div>

      <div class="group">
        <label for="owner">Website Owner<sub>(optional)</sub></label>
        <input v-model="owner" id="owner" type="text" placeholder="https://twitter.com/awesome_" />
      </div>

      <div class="group">
        <label for="email">E-mail<sub>(optional)</sub></label>
        <input v-model="email" id="email" type="email" placeholder="support@awesome.dev" />
      </div>

      <button @click="submit()" >Submit</button>
    </form>
  </div>
</template>