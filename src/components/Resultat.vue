<template>
  <h1>{{resultat}}</h1>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Resultat",
  props:{
    resultat: {
      type: Number,
      default: 0,
      required: true
    }
  }
})
</script>
<style scoped>

</style>