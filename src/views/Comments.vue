<template>
  <div class="comments">
    <div class="container">
      <AddSomeComments/>
       <!-- <UpdateComment/> -->
      <SomeComments/>      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SomeComments from '@/components/SomeComments.vue'
import AddSomeComments from '@/components/AddSomeComments.vue'
//import UpdateComment from '@/components/UpdateComment.vue'

export default {
  name: 'Comments',
  components: {
      SomeComments,
      AddSomeComments,
      //UpdateComment
  }
}
</script>

<style>

</style>