<template>
  <div class="">
    <h1>Time to dance!</h1>
    <h4>cards remaining:# (add dynamic cards.length) </h4>
    <opponentHand></opponentHand>
    <myHand></myHand>
    <button> play</button>
    <button> reset (setup re-draw game logic)</button>
  </div>
</template>

<script>
  import myHand from '../components/myHand'
  import opponentHand from '../components/opponentHand'

  export default {
    computed: {
      myHand() {
        return this.$store.state.myHand;
      },
      allGames() {
        return this.$store.state.cards
      },
      opponentHand() {
        return this.$store.state.opponentHand
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
      gameConfig(game) {
        console.log("hello from gameconfig!!")
        return this.$store.state.get
      }
    },

    components: {
      opponentHand,
      myHand
    }
  };
</script>


<style>
</style>