<script>
  export let fruits;
  export let reverse;
  export let slice;
  // console.log(reverse, slice);
  
  let computedFruits = fruits;
  let name = "";

  if (reverse) {
    computedFruits = [...fruits].reverse();
    name = "reverse";
  }

  label: {
    if (!slice) {
      break label;
    }
  
    if (Array.isArray(slice)) {
      computedFruits = computedFruits.slice(...slice);
      name += ` slice ${slice.join(", ")}`;
      break label;
    }
  
    computedFruits = computedFruits.slice(...slice.split(","));
    name += ` slice ${slice}`;
  }
</script>

<h2>Fruits {name}</h2>
<ul>
  {#each computedFruits as fruit}
    <li>{fruit}</li>
  {/each}
</ul>
