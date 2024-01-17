<script>
  import Dice from "./lib/Dice.svelte";
</script>

<main>
  <div class="gameArea">
    <h1>Let's play Yathzee</h1>

    <Dice />
  </div>
</main>

<style>
  .gameArea {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
