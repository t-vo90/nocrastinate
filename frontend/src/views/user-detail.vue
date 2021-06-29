<script>
// @ is an alias to /src
import UserCard from '@/components/user-card.vue'
import Counter from '@/components/counter.vue'
import NavBar from '@/components/nav-bar.vue'
import { mapActions } from 'vuex'

export default {
  name: 'UserDetail',
  components: {
    UserCard,
    NavBar,
    Counter
  },
  data() {
    return {
      user: null
    }
  },
  async created() {
    this.user = await this.fetchUser(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchUser'])
  }
}
</script>

<template lang="pug">
  .userdetail
    NavBar
    h1 This is a user Detail
    UserCard(:user="user" v-if="user")
    Counter
</template>
