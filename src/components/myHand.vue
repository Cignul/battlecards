<template>
  <div>
    <div class="row" style="justify-content: space-evenly">
      <div class="card col-2" style="width: 18rem;" v-for="card in setGame.players[0].hand" @click="playerCard(setGame.players[0].id, card.id)">
        <img class="card-img-top" :src="card.img" alt="shown card">
        <div class="card-body ">
          <h6 class="card-title ">{{card.name}}</h6>
          <p>Health: {{card.health}}</p>
          <p>Attack: {{card.attack}}</p>
          <p>Defense: {{card.defense}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myHand',
    props: {
      playerCard: {
        type: Function
      }

    },
    computed: {
      setGame() {
        return this.$store.state.game
      },
      myHand() {
        return this.$store.state.myHand
      },
      getDefense() {
        return this.$store.state.myHand.getDefense
      },
      getAttack() {
        return this.$store.state.myHand.getAttack
      },
      getHealth() {
        return this.$store.state.myHand.getHealth
      },

    },
    methods: {
      selectHero() {

      }
    }

  }
</script>

<style></style>
<!-- working for now , some data drawing -->