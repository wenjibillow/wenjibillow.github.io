<template> 
  <b-container>        
    <b-row align-v="center" v-if="allComments"  class="comments">
      <b-col v-for="comment in allComments" :key="comment.  id" class="comment">
       <div> ID: {{comment.id}}</div><br>
         <strong>{{comment.name}}</strong><br>
          {{comment.body}}<br>
          {{comment.email}}
          <b-icon @click="deleteComment(comment.id)"  icon="trash" class="icon"></b-icon>
      </b-col>
    </b-row>
  </b-container> 
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: "SomeComments",   
  methods: {
      ...mapActions(['fetchComments', 'deleteComment'])
  },
  computed: mapGetters(['allComments']),    
  created(){
      this.fetchComments()
  }
}
</script>

// <style lang="scss" scoped>
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

</style>