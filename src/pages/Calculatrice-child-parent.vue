<template>
  <h1>Calculatrice Graphic</h1>
  <button-component v-for="(btnValue, index) in buttonValues" :key='index' :button-value="btnValue" @buttonValueEmit="handleButtonValueEmit"/>
  <show-result :result="operation === '' ? resultat : inputValue2"></show-result>
</template>
<script>
import {defineComponent} from 'vue'
import ButtonComponent from "../components/ButtonComponent.vue";
import ShowResult from "../components/ShowResult.vue";
import operationMixin from "../mixins/operationMixin.js";
export default defineComponent({
  name: "Calculatrice-child-parent",
  components: { ButtonComponent, ShowResult },
  mixins:[operationMixin],
  data: ()=> {
    return {
      buttonValues: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '/', '*', '=', 'C'],
      resultat: '0',
      inputValue2: '',
      operation: '',
    }
  },
  methods: {
    handleButtonValueEmit (valueButton) {
      switch (valueButton){
        case '+':
        case '-':
        case '*':
        case '/': {
          this.operation = valueButton
          break;
        }
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':{
          console.log('ciao', valueButton)
          if (this.operation === ''){
            if (valueButton === '.' && this.resultat === '0') {
              this.resultat = '0.'
            } else if(this.resultat === '0') {
              this.resultat = '' + valueButton
            }else {
              this.resultat = this.resultat + valueButton
            }
          }else{
            this.inputValue2 = this.inputValue2 + valueButton
          }
          break;
        }
        case 'C': {
          this.clearInput()
          break;
        }
        case '=': {
          switch (this.operation) {
            case '+':{
              this.resultat = this.addition(parseFloat(this.resultat), parseFloat(this.inputValue2))
              this.clearInput2()
              this.clearOperation()
              break;
            }
            case '-':{
              this.resultat = this.soustraction(parseFloat(this.resultat), parseFloat(this.inputValue2))
              this.clearInput2()
              this.clearOperation()
              break;
            }
            case '*':{
              this.resultat = this.multiplication(parseFloat(this.resultat), parseFloat(this.inputValue2))
              this.clearInput2()
              this.clearOperation()
              break;
            }
            case '/':{
              this.resultat = this.division(parseFloat(this.resultat), parseFloat(this.inputValue2));
              this.clearInput2()
              this.clearOperation()
              break;
            }
          }
        }
      }
    },

    clearInput2(){
      this.inputValue2 = ''
    },

    clearOperation(){
      this.operation = ''
    },

    clearInput(){
      this.operation = ''
      this.inputValue2 = ''
      this.resultat = ''
    }
  }
})
</script>
<style scoped>

</style>