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
      },
      //currently working on gameconfig
      gameConfig() {
        return this.$store.state.get
      }

    },
    mounted() {
      this.$store.dispatch('getAllGames');
    },
    methods: {
      setMyHand(cards) {
        this.$store.dispatch("setMyHand", cards);
      }

    },
    components: {
      myHand
    }
  };
</script>


<style>
</style>