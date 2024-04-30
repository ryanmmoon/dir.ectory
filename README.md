<a href="https://dir.ectory" target="_BLANK">
  <img src="/public/img/logo-sm.svg" alt="Handshake Dir.ectory.">
</a>

## Accessible directory of resources for new Handshake users

This project is supported by the Open Systems <a href="https://github.com/opensystm/handshake-micro-grants" target="_BLANK">Handshake micro grant</a>. Read the initial <a href="https://github.com/opensystm/handshake-micro-grants/issues/6" target="_BLANK">project proposal</a>.

Developed by: <a href="https://ryanmoon" target="_BLANK">Ryan Moon</a>

---

### Why create a directory?

<a href="https://en.wikipedia.org/wiki/Web_directory" target="_BLANK">Web directories</a> were used when the internet was first becoming popular to find contact information. These same systems are still used today to find information without the use of search engines.

Finding websites on <a href="https://handshake.org" target="_BLANK">Handshake</a> is not to difficult thanks to social media and existing websites in the ecosystem. Though having a directory of website listings in one place should help new users find resources faster and see what others are building.

---

### Add your website

To add a website to the directory, please make a pull request/issue, email the website details to submit@hns.directory, or fill out the form on the '<a href="https://dir.ectory/submit/#submit-via-form" target="_BLANK">Submit site</a>' page.

The process for creating the .md file and making it public can be found on the same <a href="https://dir.ectory/submit/" target="_BLANK">Submit site</a> page. This is currently done manually so your website may take some time to be added.

---

### Schema

Website details are stored as .md files in the content directory. Only a title, slug, and url are needed for a site to be added, though more information is preferred.

Field Name      | Description
----------------|-----------
`title`         | title of website
`slug`          | url friendly title, same as file name
`icon`          | name of image file, ex: bob.jpg
`description`   | short description of website and services offered
`handshake`     | is the website hosted with handshake, boolean
`url`           | website address, ex: https://dir.ectory/
`docs`          | link to documentation
`repo`          | link to git repository
`owner`         | link to where website owner can be reached

---

### Setup

Install dependencies, start development server, build application, preview production build:

```bash
# npm
npm install
npm run dev
npm run build
npm run preview
```

Check out the <a href="https://nuxt.com/docs/getting-started/deployment" target="_BLANK">deployment documentation</a> for more information.
