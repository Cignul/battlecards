<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Fighter1</h5>
        <p class="card-text">health and shield maybe</p>
        <!-- Fighter 1 button-->
        <a href="#" class="btn btn-primary">select this hero</a>
      </div>
      <div v-for="card in setGame.players[0].hand">
        {{card.name}}</div>
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