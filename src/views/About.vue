<template>
    <b-container>
      <!-- <top-header></top-header> -->
      <b-row align-v="center">
        <artist-card v-for="artist in displayArtists" :key="artist.id" :name="artist.name" :website="artist.website" :email="artist.email" :company="artist.company.name" @more-about="onMoreAbout"></artist-card>
      </b-row>
      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @input="paginate(currentPage)"
    ></b-pagination>
    </b-container>
</template>

<script>
import axios from 'axios'
// import TopHeader from '@/components/TopHeader.vue';
import ArtistCard from '@/components/ArtistCard.vue';

export default {
  name: "about",
  components: { 
    "artist-card": ArtistCard,
    // 'top-header': TopHeader
  },
  mounted() {
    this.fetchData()
  },
  data(){
    return {
      msg: '',
      artists: [],
      displayArtists: [],
      currentPage: 1,
      rows: 1,
      perPage: 3
    }
  },
  methods: {
    async fetchData() {
      // const res = await fetch("https://jsonplaceholder.typicode.com/users");
      // const val = await res.json();
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      const val = res.data
      this.artists = val
      this.displayArtists = val.slice(0, 3)
 
      this.rows = this.artists.length
      console.log(val)
    },
    paginate(currentPage){
      const start = (currentPage - 1) * this.perPage;
      this.displayArtists = this.artists.slice(start, start+3);
    },
    onMoreAbout(msg){
      alert(msg)
    }
    
  }
}
</script>

<style>

</style>
