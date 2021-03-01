<template>
  <div>
    <div class="add">
       <form @submit="onSubmit">
         <input type="text" v-model="body" placeholder="Add Comment...">
         <input type="submit" value="Post">
       </form>
     </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    name: "AddSomeComments",
    data() {
      return {
          body: ''
      }
    },
    watch: {
      body(newComment, oldComment){
        console.log(`old comment ${oldComment}, new comment ${newComment}`)
      }
    },
    methods: {
       ...mapActions(['addSomeComments']),
       onSubmit(e) {
         e.preventDefault();
         this.addSomeComments(this.body)
       } 
    }  
  }
</script>

<style lang="scss" scoped>
  $border-color: #17a2b8;
  $background-color:#17a2b8;
  $color: #fff;

  .add {
    margin: 15px;
  }
  
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid $border-color;
    outline: 0;
  }

  input[type="submit"] {
    flex: 2;
    background: $background-color;
    color: $color;
    border: 1px $border-color solid;
    cursor: pointer;
  }

</style>