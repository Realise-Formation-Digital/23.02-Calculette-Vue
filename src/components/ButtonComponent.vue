<template>
  <v-btn @click="click()">{{buttonValue}}</v-btn>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ButtonComponent",
  props:{
    buttonValue:{
      type:String,
      default: '',
      required:true
    }
  },
  methods:{
    click(){
      this.$emit('buttonValueEmit', this.buttonValue)
    }
  }
})
</script>
<style scoped>

</style>