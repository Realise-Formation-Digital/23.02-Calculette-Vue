<template>
  <input-component v-for="inputValue in inputComponentValues" :key="inputValue" @input-value-emit="handleInputValueElement" :input-type="inputValue"/>
  <button-component v-for="buttonValue in buttonComponentValues" :key="buttonValue" @button-value-emit="handleButtonValueElement" :button-value="buttonValue"/>
  <resultat :resultat="resultat"></resultat>
</template>

<script>
import {defineComponent} from 'vue'
import ButtonComponent from "../components/ButtonComponent.vue";
import Resultat from "../components/Resultat.vue";
import InputComponent from "../components/InputComponent.vue";
export default defineComponent({
  name: "Calculatrice-simple",
  components:{ButtonComponent, Resultat, InputComponent},
  data: () => {
    return{
      buttonComponentValues: ['+', '-', '/', '*'],
      inputComponentValues: ['input1', 'input2'],
      input1Val: 0,
      input2Val: 0,
      resultat: 0
    }
  },
  methods:{
    addition(){
      this.resultat = this.input1Val + this.input2Val
    },
    soustraction(){
      this.resultat = this.input1Val - this.input2Val
    },
    multiplication(){
      this.resultat = this.input1Val * this.input2Val
    },
    division(){
      this.resultat = this.input1Val / this.input2Val
    },
    handleButtonValueElement(value){
      switch (value) {
        case '+':{
          this.addition()
          break;
        }
        case '-':{
          this.soustraction()
          break;
        }
        case '*':{
          this.multiplication()
          break;
        }
        case '/':{
          this.division()
          break;
        }
      }
    },

    handleInputValueElement(value){
      switch (value.type) {
        case 'input1': {
          this.input1Val = value.value
         break;
        }
        case 'input2': {
          this.input2Val = value.value
          break;
        }
      }
    }
  }
})
</script>

<style scoped>

</style>