<template>
  <v-text-field v-model="inputValue" variant="outlined" @change="onChangeValue()" type="number"/>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "InputComponent",
  props:{
    inputType: {
      type:String,
      required: true,
      default: ''
    }
  },
  data: ()=>{
    return{
      inputValue: 0
    }
  },
  methods:{
    onChangeValue(){
      this.$emit('inputValueEmit', {
        value: this.inputValue,
        type: this.inputType
      })
    }
  }
})
</script>
<style scoped>

</style>