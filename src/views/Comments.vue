<template>
  <div class="comments">
    <div class="container">
      <AddSomeComments/>
      <MyComponent/>
       <!-- <UpdateComment/> -->
      <SomeComments/> 
      <!-- <singleComment/>      -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SomeComments from '@/components/SomeComments.vue'
import AddSomeComments from '@/components/AddSomeComments.vue'
import MyComponent from '@/components/MyComponent.vue'

export default {
  name: 'Comments',
  components: {
    SomeComments,
    AddSomeComments,
    MyComponent    
  }
}
</script>

<style>

</style>