<template>
<div>
    <h1> Users </h1>
    <p>{{ userId }}</p>
    <p>{{ $route.params.name }}</p>
    <p></p>
</div>
</template>

<script>
export default {
  computed: {
    userId () {
      return this.$route.params.userId
    }
  }
}
</script>
