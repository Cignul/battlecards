<template>
  <div>
    <div class="row" style="justify-content: space-evenly">
      <div class="card col-2" style="width: 18rem;" v-for="card in setGame.players[0].hand">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{card.name}}</h5>
          <p class="card-text">health and shield maybe</p>
          <!-- Fighter 1 button-->
          <a href="#" class="btn btn-primary" @click='selectHero'>select this hero</a>
        </div>
        <div>
          {{card.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myHand',
    computed: {
      setGame() {
        return this.$store.state.game
      }
    },
    methods: {
      selectHero() {
        //needs to add the playerCardID to the payload
        //from the @click button on card - update store w/ selected hero
      }
    }

  }
</script>

<style></style>
<!-- working for now , some data drawing -->