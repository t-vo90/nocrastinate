<script>
export default {
  name: 'NavigationBar'
}
</script>

<template lang="pug">
  div
    #navbarHeader.collapse.bg-dark
      .container
        .row
          .col-sm-8.col-md-7.py-4
            h4.text-white About
            p.text-muted
              | improRPG is a live IMPROvisied multiplayer text based Role Play Game adventure story notebook sideapp
          .col-sm-4.offset-md-1.py-4
            h4.text-white &nbsp;
            ul.list-unstyled
              li
                router-link.text-white(to="/") Home
              li
                router-link.text-white(to="/story") Story
              li
                router-link.text-white(to="/about") About
    .navbar.navbar-dark.bg-dark.shadow-sm
      .container
        a.navbar-brand.d-flex.align-items-center(href='#')
        button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarHeader' aria-controls='navbarHeader' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon

</template>

<style lang="scss" scoped>
// .box {
// padding: 2rem;
// border: 1px solid #333;
// border-radius: 0.3rem;
// background: #ccc;
// }
//
</style>
