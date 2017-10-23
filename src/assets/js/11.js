export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCount () {
      if (!this.food.count = 1) {
        this.food.count = 1
      } else {
        this.food.count++
      }
    }
  }
}
