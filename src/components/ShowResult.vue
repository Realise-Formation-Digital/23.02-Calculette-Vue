<template>
    <h1>{{ result }}</h1>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ShowResult",
  props:{
    result: {
      type: String,
      default: '',
      required: true
    }
  },
  data: () => {
    return {

    }
  },
  methods:{

  }
})
</script>
<style scoped>

</style>