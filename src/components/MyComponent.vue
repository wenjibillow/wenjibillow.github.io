<template>
  <div>
    <p v-if="isOnline">I am online :)</p>
    <p v-if="isOffline">I am offline :(</p>
  </div>
</template>

<script>
  export default {
      name: 'MyComponent',
      computed: {
          networkStatus () {
              return this.isOnline ? 'My network is fine' : 'I am offline'
          }
      }
  }
</script>

<style>

</style>