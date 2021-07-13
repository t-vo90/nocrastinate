<script>
import NavBar from '@/components/nav-bar.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  },
  components: { NavBar }
}
</script>
<template lang="pug">
  #app
    NavBar
    //- #nav
      //- router-link(to="/") Home
      //- router-link(to="/profile") Profile
      //- router-link(to="/login") Login
      //- router-link(to="/register") Register
      //- a(@click="doLogout" href="#") Logout
    router-view
</template>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
