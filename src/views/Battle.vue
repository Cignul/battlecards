<template>
  <div class="">
    <h2>Time to dance!</h2>
    <h4>cards remaining:# (add dynamic cards.length) </h4>
    <form>
      <input type=text placeholder="Name">
      <input type=number placeholder="#of opponents">
    </form>

    <button> play</button>
    <button> reset (setup re-draw game logic)</button>
    <opponentHand></opponentHand>
    <myHand></myHand>
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
      },
      setMyHand() {
        return this.$store.state.get
      }
    },
    mounted() {
      //not sure if dispatch is right, trying to get the cards in hand
      this.$store.dispatch('getAllGames');
      this.$store.dispatch('createNewGame');

    },



    methods: {
      setMyHand(cards) {
        this.$store.dispatch("setMyHand", cards);
      },
      //currently working on gameconfig TRYING TO IMPLEMENT THIS
      gameConfig(game) { //need to wire this up
        playerName: ""; //The player's name
        opponents: 1; // Defaults to 1 if not specified
        set: 2 // Card Images are generated base on game set 1-4

        console.log("hello from gameconfig!!")
        return this.$store.state.get
      },

    },

    components: {
      opponentHand,
      myHand
    }
  };
</script>


<style>
</style>