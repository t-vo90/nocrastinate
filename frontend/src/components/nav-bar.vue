<script>
import { mapActions } from 'vuex'

export default {
  name: 'NavBar',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  }
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
                router-link.nav-link(to='#' ) Dashboard
            li.nav-item
                router-link.nav-link(to='/profile') Profile
            li.nav-item
                router-link.nav-link(to='#') Friends
            li.nav-item
                router-link.nav-link(to='/community') Community
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
                    a.nav-link(@click="doLogout" href="#" tabindex='-1') Logout
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
// a.router-link-active {
//   color: rgb(221, 29, 29);
//   background-color: lightgray;
// }
</style>
