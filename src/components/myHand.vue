<template>
  <div>
    <div class="row" style="justify-content: space-evenly">
      <div class="card col-2" style="width: 18rem;" v-for="card in setGame.players[0].hand" @click="playerCard(setGame.players[0].id, card.id)">
        <img class="card-img-top" src="card.img" alt="Card image cap">{{card.img}}<img/>
        <div class="card-body">
          <!-- <span class='defense'>{{myHand.defense}} </span>
          <span class='attack'>{{myHand.attack}} </span>
          <span class='health'>{{myHand.health}} </span> -->
          <!-- <img :src="hero.img" /> -->
          <h5 class="card-title">{{card.name}}</h5>
          <p class="card-text">health and shield maybe</p>
          <!-- Fighter 1 button-->
          <!-- <a href="#" class="btn btn-primary" @click='selectHero'>select this hero</a> -->
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