<script>
  import Die from "./lib/Die.svelte";
  import Table from "./lib/Table.svelte";

  const infiniteRollsPossible = true;

  const eyes = [0, 0, 0, 0, 0];
  const diceIds = [0, 1, 2, 3, 4];
  let isKept = [false, false, false, false, false];
  let lastRoll = 0;
  $: canSelectDies = lastRoll === 1 || lastRoll === 2;

  const rollMessage = [
    "Roll the dice!",
    "Second roll!",
    "Last roll!",
    "Select category",
  ];

  function rollDies() {
    for (const dieId of diceIds) {
      if (!isKept[dieId]) {
        eyes[dieId] = Math.ceil(Math.random() * 6);
      }
    }
    infiniteRollsPossible ? (lastRoll = 1) : (lastRoll = lastRoll + 1);
    if (lastRoll === 3) {
      isKept = [true, true, true, true, true];
    }
  }

  function toggleDieState(dieId) {
    if (canSelectDies) {
      isKept[dieId] = !isKept[dieId];
    }
  }
</script>

<main>
  <div class="gameArea">
    <h1>Let's play Yahtzee</h1>

    <button
      class="btn btn-primary"
      disabled={lastRoll === 3}
      on:click={rollDies}
    >
      {rollMessage[lastRoll]}</button
    >

    <div class="diceBoard">
      {#if lastRoll !== 0}
        {#each diceIds as dieId}
          <Die
            eyes={eyes[dieId]}
            isKept={isKept[dieId]}
            canSelectDie={canSelectDies}
            on:dieClicked={() => toggleDieState(dieId)}
          ></Die>
        {/each}
      {/if}
    </div>

    <div>
      <Table {eyes}></Table>
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

  .diceBoard {
    display: flex;
    width: 500px;
    align-items: center;
  }
</style>
