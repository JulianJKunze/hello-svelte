<script>
  const eyes = [0, 0, 0, 0, 0];
  const diceIds = [0, 1, 2, 3, 4];
  const isKept = [false, false, false, false, false];
  let lastRoll = 0;

  const rollMessage = [
    "Roll the dice!",
    "Second roll!",
    "Last roll!",
    "Select category",
  ];

  function getRandomEyes() {
    for (const dieId of diceIds) {
      if (!isKept[dieId]) {
        eyes[dieId] = Math.ceil(Math.random() * 6);
      }
    }
    lastRoll = lastRoll + 1;
  }

  function toggleDieState(dieId) {
    if (lastRoll === 1 || lastRoll === 2) {
      isKept[dieId] = !isKept[dieId];
    }
  }
</script>

<main>
  <div class="gameArea">
    <h1>Let's play Yathzee</h1>
    <div class="diceApplet">
      <button disabled={lastRoll === 3} on:click={getRandomEyes}>
        {rollMessage[lastRoll]}</button
      >
      <div class="diceBoard">
        {#if lastRoll !== 0}
          {#each diceIds as dieId}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              class="diceBoard__dieContainer clickable {isKept[dieId]
                ? 'diceBoard__diceContainer--isKept'
                : 'diceBoard__diceContainer--isRerolled'}"
              on:click={() => toggleDieState(dieId)}
            >
              <img
                class="diceBoard__die dieId-{dieId}"
                src="die-{eyes[dieId]}.svg"
                alt="A die face"
              />
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</main>

<style>
  .gameArea {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
    align-items: center;
  }

  .diceBoard__dieContainer {
    flex: 1;
    margin: 10px;
    border-radius: 10px;
  }

  .diceBoard__diceContainer--isKept {
    border: 3px solid #646cff;
  }
  .diceBoard__diceContainer--isRerolled {
    border: 3px solid transparent;
  }

  .diceBoard__die {
    vertical-align: middle;
  }
</style>
