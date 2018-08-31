<template>

  <div class="row" style="justify-content: space-evenly">
    <div class="card col-2" style="width: 18rem;" v-for="card in setGame.players[1].hand">
      <img class="card-img-top " src="./cardback.jpg" alt="Card image cap">
      <div class="card-body ">
        <h6 class="card-title ">{{card.name}}</h6>
        <p class="card-text ">enemy card face down until selected</p>
        <a href="#" class="btn btn-primary" @click='selectEnemy'>select this enemy</a>
        <!-- Fighter 2 button  ** TRY TO PUT THIS IN AN ARRAY INSTEAD OF 5 HTML TEMPLATES -->
        <!-- need a vfor to iterate over 5 cards(i think) -->
        <!-- seperate views(components) for hand and opponent hand probably -->

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'opponentHand',
    computed: {
      setGame() {
        return this.$store.state.game
      }
    },
    methods: {
      selectEnemy() {
        //need to set the @click to get opponentcardId 
      }
    }

  }
</script>


<style></style>