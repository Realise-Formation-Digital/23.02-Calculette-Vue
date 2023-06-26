const operationMixin = {
  methods: {
    addition(input1, input2) {
      return input1 + input2
    },
    soustraction(input1, input2) {
      return input1 - input2
    },
    multiplication(input1, input2) {
      return input1 * input2
    },
    division(input1, input2) {
      return input1 / input2
    }
  }
}

export default operationMixin