<script>
import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: { Counter },
  data() {
    return {
      users: [],
      time: new Date(),
      message: ''
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers', 'goLive', 'sendMessageToLiveStream', 'joinStream']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    }
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages'])
  }
}
</script>

<template lang="pug">
  .home
    h1 NoCrastinate
    h2 Welcome {{user.name}}

    p The time is: {{ time }}
    div(v-if="liveStreams.length")
      h2 Live Streams
      div(v-for="stream in liveStreams")
        p {{stream}}
        button(@click="joinStream(stream)") Join stream
    button(@click='goLive') Go Live
    div(v-if="currentLiveStream")
      h3 Live stream
      .messages
        .message(v-for="message in liveStreamMessages")
          p
            span {{ message.author }}:&nbsp;
            span {{ message.body }}
      form(@submit="sendMessage")
        input(type="text" v-model="message")
        input(type="submit" value="Send message")
    Counter
</template>
