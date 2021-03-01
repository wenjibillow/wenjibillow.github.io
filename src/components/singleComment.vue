<template>
  <div id="single-comment">
    <MyComponent/>
    <h1>{{comment.name}}</h1>
    <article>{{comment.body}}</article>    
  </div>  
</template>

<script>
  import MyComponent from '@/components/MyComponent.vue'

  export default {
    components: {
      MyComponent
    },
    data() {
      return {
        id: this.$route.params.id,
        comment: {}
      }
    },  
    async created() {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments/' + this.id)
      const data = await response.json()
      //console.log(data)
      this.comment = data
    }
  }
</script>

<style lang="scss" scoped>
  #single-comment{
    max-width: 960px;
    margin-top: 0 auto;
  }
</style>