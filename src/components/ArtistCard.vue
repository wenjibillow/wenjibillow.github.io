<template>
  <div>    
    <b-col>
      <b-card 
      :title="name" img-src="https://picsum.photos/id/117/200/300"
      img-alt="Artist-info"
      img-top
      tag="article"
      style="max-width:20rem"
      class="mb-2"
      footer="Copyright"
      >
        <b-card-text>
            <p>About: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Web: {{website}}<br>Email: {{email}}<br>Company: {{company}}</p>
        </b-card-text>
        <b-button variant="primary" @click="onClick" :value="msg">More</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
  export default {
    name: "ArtistCard",
    data(){
      return {
        msg: 'More About the Artist: Lorem ipsum dolor sit amet, consectetur adipiscing.'
      }
    },  
    props:{
      name: String,
      website: String,
      email: String,
      company: String,
    },
    
    methods: {
      onClick(){
        this.$emit('more-about', this.msg)    
      },
    }
  }
</script>

<style>

</style>