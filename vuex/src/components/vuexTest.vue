<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ count }}</p>
    <p>{{ upOne }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    {{ this.$store.state.count }}
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from "vuex";
export default {
  name: "emitTest",
  data: function() {
    return {
      
    }
  },
  methods: {
        ...mapActions(['increment']),
        ...mapMutations(['increment']),
        ...mapMutations(['decrement']) 
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['upOne']),
        ...mapGetters(['name']),  

    }
};
</script>

<style scoped>

</style>
