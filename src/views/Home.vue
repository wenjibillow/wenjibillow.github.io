<template>
  <div class="home">
    <div class="container">
      <AddAlbum/>
      <FilterAlbums/>
      <Albums />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Albums from '@/components/Albums.vue'
import AddAlbum from '@/components/AddAlbum.vue'
import FilterAlbums from '@/components/FilterAlbums.vue'

export default {
  name: 'Home',
  components: {
    Albums,
    AddAlbum,
    FilterAlbums
  }
}
</script>

<style >


</style>