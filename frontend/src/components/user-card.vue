<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      defaultBio: 'No Bio'
    }
  }
}
</script>

<template lang="pug">
.box
    h1 {{ user.name }} is {{user.age}} and a {{user.occupation}}
    h2 Bio: {{user.bio || defaultBio}}
    h2 Actions
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 0.3rem;
  background: #ccc;
}
</style>
