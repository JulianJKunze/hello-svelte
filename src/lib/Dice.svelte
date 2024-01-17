<script>
  const eyes = [0, 0, 0, 0, 0];
  const diceIds = [0, 1, 2, 3, 4];

  function getRandomEyes() {
    for (const dieId of diceIds) {
      eyes[dieId] = Math.ceil(Math.random() * 6);
    }
  }
</script>

<div class="diceApplet">
  <button on:click={getRandomEyes}>Roll!</button>
  Click on a die to keep it.
  <div class="diceBoard">
    {#each diceIds as dieId}
      <img
        class="diceBoard__die dieId-{dieId}"
        src="die-{eyes[dieId]}.svg"
        alt="A blank die face"
      />
    {/each}
  </div>
</div>

<style>
  .diceApplet {
    display: flex;
    flex-direction: column;
  }

  button {
    display: block;
  }

  .diceBoard {
    display: flex;
    width: 500px;
  }

  .diceBoard__die {
    min-width: 0;
  }
</style>
