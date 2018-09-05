<template>
  <div class="">
    <h2>Time to dance!</h2>
    <!-- <h4>cards remaining:# (add dynamic cards.length) </h4> -->
    <form>
      <input type=text placeholder="Name">
      <input type=number placeholder="#of opponents">
    </form>
    <!-- wire up send payload to this play button here have payload complete need to post to server on the @click -->
    <button @click=""> play</button>
    <button> reset</button>
    <opponentHand :opponentCard="setOpponentHand"></opponentHand>
    <myHand :playerCard="setPlayerHand"></myHand>

  </div>
</template>

<script>
  import myHand from '../components/myHand'
  import opponentHand from '../components/opponentHand'

  export default {
    data() {
      return {
        attackPayload: {
          playerId: "",
          playerCardId: "",
          opponentId: "",
          opponentCardId: ""
        }
      }
    },
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

      gameConfig(game) { //need to wire this up
        playerName: ""; //The player's name
        opponents: 1; // Defaults to 1 if not specified
        set: 2 // Card Images are generated based on game set 1-4

        console.log("hello from gameconfig!!")
        return this.$store.state.get
      },
      setPlayerHand(playerID, cardID) {
        this.attackPayload.playerId = playerID
        this.attackPayload.playerCardId = cardID
      },
      setOpponentHand(opponentCardId, opponentId) {
        this.attackPayload.opponentId = opponentId
        this.attackPayload.opponentCardId = opponentCardId
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