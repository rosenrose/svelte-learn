<script>
  let name = "world!";
  let isVisible = true;

  let fruits = ["apple", "banana", "grape", "peach"];
</script>

<button on:click={() => isVisible = !isVisible}>toggle</button>
{#if isVisible}
  <h1>Hello {name}</h1>
{:else}
  <h2>No name</h2>
{/if}

<button on:click={() => fruits = fruits.slice(1)}>Eat slice</button>
<button on:click={() => fruits.shift()}>Eat shift</button>
<ul>
  {#each fruits as fruit, i}
    <li>{i} {fruit}</li>
  {:else}
    <p>No fruits</p>
  {/each}
</ul>

<style>
  h1 {
    color: skyblue;
  }
</style>