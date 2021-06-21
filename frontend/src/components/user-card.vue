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
    .actions(v-for="action in user.possibleActions")
        //- h3{{ action.name}}
        //- p(v-if="!photo.likedBy.length")
            //- no likes yet!
        //- p(v-else)
            //- p{{photo.likedBy.map(user => user.name).join(', ')}}
</template>

<style lang="scss" scoped>
.box {
  font-size: 100%;
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 0.3rem;
  background: #ccc;
}
</style>
