<template>
  <div class="home">
    <div class="container">
      <MyComponent/>
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
  import MyComponent from '@/components/MyComponent.vue'
  
  export default {
    name: 'Home',
    components: {
      Albums,
      AddAlbum,
      FilterAlbums,
      MyComponent
    }
  }
</script>

<style >


</style>