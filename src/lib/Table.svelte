<script>
  export let eyes;

  $: upperSectionPoints = calculateUpperSectionPoints(eyes);
  const upperSectionLabels = [
    "Aces",
    "Twos",
    "Threes",
    "Fours",
    "Fives",
    "Sixes",
  ];

  function calculateUpperSectionPoints(eyes) {
    let points = [];
    for (let categoryNumber = 1; categoryNumber <= 6; categoryNumber++) {
      points[categoryNumber - 1] =
        eyes.filter((dieNumber) => dieNumber == categoryNumber).length *
        categoryNumber;
    }
    return points;
  }
</script>

<table>
  {#each upperSectionLabels as upperSectionLabel, i}
    <tr>
      <th>{upperSectionLabel}</th>
      <td>{upperSectionPoints[i]}</td>
    </tr>
  {/each}
</table>
