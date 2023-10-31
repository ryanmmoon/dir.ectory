<img src="/public/img/logo-sm.svg" alt="Handshake Dir.ectory.">

#### Accessible directory of resources for new Handshake users

This project is supported by the Open Systems [Handshake micro grant](https://github.com/opensystm/handshake-micro-grants). Read the initial [project proposal](https://github.com/opensystm/handshake-micro-grants/issues/6).

Developed by: [Ryan Moon](https://ryanmoon)

---

### Why create a directory?

[Web directories](https://en.wikipedia.org/wiki/Web_directory) were used when the internet was first becoming popular to find contact information for people and businesses. This same system is still used by many to find information instead of search engines.

Finding websites on [Handshake](https://handshake.org) is not that difficult thanks to social media and existing websites in the ecosystem. Though having a directory of website listings in one place will make it even easier to find resources and see what others are building.

---

### Add your website

To add a website to the directory, make a pull request/issue, email the website details to submit@hns.directory, or fill out the form on the '[Submit site](https://dir.ectory/submit/#submit-via-form)' page.

The process for creating the .md file and making it public can be found in the [documentation](https://dir.ectory/docs). This is done manually at the moment so your website may take some time to be added after submission.

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

## Setup

Install dependencies, start development server, build application, preview production build:

```bash
# npm
npm install
npm run dev
npm run build
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
