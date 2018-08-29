<template>
  <div class="">
    <h1>Time to dance!</h1>
    <h4>cards remaining, position might work</h4>
    <myHand></myHand>
    <button> play</button>
    <button> reset (setup re-draw game logic)</button>
  </div>
</template>

<script>
  import myHand from '../components/myHand'
  export default {
    computed: {
      myHand() {
        return this.$store.state.myHand;
      },
      allGames() {
        return this.$store.state.cards
      }
    },
    mounted() {
      this.$store.dispatch('getAllGames');
    },


    methods: {
      setMyHand(cards) {
        this.$store.dispatch("setMyHand", cards);
      },
      //currently working on gameconfig
      gameConfig() {
        console.log("hello from gameconfig!!")
        return this.$store.state.get
      }
    },

    components: {
      myHand
    }
  };
</script>


<style>
</style>