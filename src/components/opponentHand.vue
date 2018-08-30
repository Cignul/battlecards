<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="./cardback.jpg" alt="Card image cap">
    <div class="card-body">
      <h6 class="card-title">Opponent card 1</h6>
      <p class="card-text">enemy card face down until selected</p>
      <!-- Fighter 2 button  ** TRY TO PUT THIS IN AN ARRAY INSTEAD OF 5 HTML TEMPLATES -->
      <!-- need a vfor to iterate over 5 cards(i think) -->
      <!-- seperate views(components) for hand and opponent hand probably -->

    </div>
  </div>


</template>

<script>
  export default {
    name: 'opponentHand'

  }
</script>


<style></style>