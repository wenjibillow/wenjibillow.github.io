<template>
  <div>    
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Album...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>

</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    name: "AddAlbum",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      ...mapActions(['addAlbum']),
      onSubmit(e) {
        e.preventDefault();
        this.addAlbum(this.title)
      } 
    }  
  }
</script>

<style lang="scss" scoped>
  $border-color: #17a2b8;
  $background-color:#17a2b8;
  $color: #fff;

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