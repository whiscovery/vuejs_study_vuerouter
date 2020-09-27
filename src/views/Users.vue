<template>
<
  row wrap pt-5 text-xs-center
  style="max-width:500px;margin: 0 auto;"
>
  <v-flex xs12>
    <h1> Users </h1>
    <p>유저를 검색합니다</p>
  </v-flex>
</v-layout>
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
