<script>
// @ is an alias to /src
import axios from 'axios'
import UserCard from '@/components/user-card.vue'
import NavBar from '@/components/nav-bar.vue'

export default {
  name: 'Home',
  components: {
    UserCard,
    NavBar
  },
  data() {
    return {
      users: [],
      time: new Date()
    }
  },
  async created() {
    const usersRequest = await axios.get('/api/users')

    this.users = usersRequest.data
  }
}
</script>

<template lang="pug">
  .home
    h1 NoCrastinate v0.0001
    nav-bar
    user-card(v-for="user in users" :user="user")
    p The Time is: {{time}}
</template>
