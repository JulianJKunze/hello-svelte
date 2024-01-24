<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let eyes;
  export let isKept;
  export let canSelectDie;
</script>

<div
  on:click={() => dispatch("dieClicked")}
  class="diceBoard__dieContainer {canSelectDie ? 'clickable' : ''}
  {isKept
    ? 'diceBoard__diceContainer--isKept'
    : 'diceBoard__diceContainer--isRerolled'}"
>
  <svg
    class="diceBoard__die dieId"
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
  >
    <use href="die-{eyes}.svg#Flat"></use>
  </svg>
</div>

<style>
  .diceBoard__dieContainer {
    flex: 1;
    margin: 10px;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.87);
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
