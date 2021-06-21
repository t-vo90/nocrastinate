<script>
export default {
  name: 'NavBar'
}
</script>

<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-light.bg-light
    a.navbar-brand(href='#') NoCrastinate
    button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
        span.navbar-toggler-icon
    #navbarSupportedContent.collapse.navbar-collapse
        ul.navbar-nav.me-auto.mb-2.mb-lg-0
            li.nav-item
                a.nav-link.active(aria-current='page' href='#') Dashboard
            li.nav-item
                a.nav-link(href='#') Profile
            li.nav-item
                a.nav-link(href='#') Friends
            li.nav-item
                a.nav-link(href='#') Community
            li.nav-item.dropdown
                a#navbarDropdown.nav-link.dropdown-toggle(href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false')
                 | Statistics
                ul.dropdown-menu(aria-labelledby='navbarDropdown')
                    li
                        a.dropdown-item(href='#') Daily
                    li
                        a.dropdown-item(href='#') Weekly
                    li
                        hr.dropdown-divider
                    li
                        a.dropdown-item(href='#') Community Statstics
                li.nav-item
                    a.nav-link.disabeld(href='#' tabindex='-1' aria-disabled='true') Disabled
            form.d-flex
                input.form-control.me-2(type='search' placeholder='Search' aria-label='Search')
                button.btn.btn-outline-sucess(type='Submit') Search




</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 3px solid #333;
  border-radius: 0.3rem;
  background: #ccc;
}
</style>
