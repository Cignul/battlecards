<template>

  <div class="row" style="justify-content: space-evenly">
    <div class="card col-2" style="width: 18rem;" v-for="card in setGame.players[1].hand" @click="opponentCard(setGame.players[1].id, card.id)">
      <img class="card-img-top" src="./cardback.jpg" alt="Card image cap" v-if="!card.visible">
      <div v-if="card.visible">
        <img class="card-img-top" :src="card.img" alt="shown card">
        <div class="card-body ">
          <h6 class="card-title ">{{card.name}}</h6>
          <p>Health: {{card.health}}</p>
          <p>Attack: {{card.attack}}</p>
          <p>Defense: {{card.defense}}</p>
          <!-- Fighter 2 button  ** TRY TO PUT THIS IN AN ARRAY INSTEAD OF 5 HTML TEMPLATES -->
          <!-- need a vfor to iterate over 5 cards(i think) -->
          <!-- seperate views(components) for hand and opponent hand probably -->

        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'opponentHand',
    props: {
      opponentCard: {
        type: Function
      }
    },
    computed: {
      setGame() {
        return this.$store.state.game
      }
    },
    methods: {
      //took care of this in store
      selectEnemy() {

      }
    }

  }
</script>


<style></style>