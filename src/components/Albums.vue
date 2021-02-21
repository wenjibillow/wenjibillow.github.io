<template>
  <div>
      <h4>Albums</h4>      
      <div v-if="allAlbums" class="albums">
          <div v-for="album in allAlbums" :key="album.id" class="album">{{album.title}}
              <b-icon @click="deleteAlbum(album.id)" icon="trash" class="icon"></b-icon>
          </div>
      </div>
      
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Albums",
  methods: {
      ...mapActions(['fetchAlbums', 'deleteAlbum']),
  },
  computed: mapGetters(['allAlbums']),
  created() {
      this.fetchAlbums();
  }
}
</script>

<style lang="scss" scoped>
  $background-color:#17a2b8;
  $border-color: #ccc;
  $color: #fff;

  .albums {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
  }

  .album {
      border: 1px solid $border-color;
      background: $background-color;
      padding: 1rem;
      border-radius: 5px;
      text-align: center;
      position: relative;
      cursor: pointer;
  }

  .icon {
     position: absolute;
     bottom: 10px;
     right: 10px;
     color: $color;
     cursor: pointer;
  }

</style>