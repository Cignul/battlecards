<template>
  <div>
    <div class="row">
      <div class="card col-2" style="width: 18rem;" v-for="card in setGame.players[0].hand">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Fighter1</h5>
          <p class="card-text">health and shield maybe</p>
          <!-- Fighter 1 button-->
          <a href="#" class="btn btn-primary">select this hero</a>
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
    }

  }
</script>

<style></style>
<!-- working for now , some data drawing -->