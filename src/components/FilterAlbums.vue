<template>
  <div>
      Filter Albums:
      <select @change="filterAlbums($event)">
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "FilterAlbums",
  methods: mapActions(["filterAlbums"])
}
</script>

<style lang="scss" scoped>
  $border-color: #17a2b8;

  select {
      margin-top: 20px;
      padding: 6px;
      border: $border-color 1px solid;
  }
</style>