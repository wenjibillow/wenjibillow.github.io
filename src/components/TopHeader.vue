<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Album&amp;Artist</b-navbar-brand>  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/comments">Comments</b-nav-item>
        </b-navbar-nav>         
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {  
}
</script>

<style lang="scss" scoped>
  #nav a.router-link-exact-active {
    color: whitesmoke
  }
</style>