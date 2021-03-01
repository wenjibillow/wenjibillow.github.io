<template> 
  <b-container>        
    <b-row align-v="center" v-if="allComments"  class="comments">
      <b-col v-for="comment in allComments" :key="comment.id" class="comment">
        <div> ID: {{comment.id}}</div><br>
        <router-link :to="'/singlecomment/' + comment.id" class="link"><h4>{{comment.name}}</h4></router-link><br>
        <div>{{comment.body}}</div> <br>
        <div>{{comment.email}}</div>          
        <b-icon @click="deleteComment(comment.id)"  icon="trash" class="icon"></b-icon>
      </b-col>
    </b-row>
  </b-container> 
</template>

<script>
  import singleComment from '@/components/singleComment.vue'
  import {mapGetters,mapActions} from 'vuex'
  
  export default {
    name: "SomeComments", 
    component: {
      singleComment
    },  
    methods: {
      ...mapActions(['fetchComments', 'deleteComment'])
    },
    computed: mapGetters(['allComments']),    
    created(){
      this.fetchComments()
    }
  }
</script>

<style lang="scss" scoped>
  $background-color:#348a3b;
  $border-color: #ccc;
  $color: #fff;

  .comment {
    margin: 5px;
    border: 1px solid $border-color;
    background: $background-color;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    color: $color;
  }

  .icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: $color;
    cursor: pointer;
  }

  .link {
    color: rgb(9, 12, 236);
    
  }

</style>