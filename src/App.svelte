<script>
  let name = "world!";
  let age = 20;

  setTimeout(() => {
    [name, age] = ["foo", 30];
  }, 2000);

  const assign = () => {
    [name, age] = ["bar", 35];
  };
</script>

<h1>Hello {name}</h1>
<h2 class={age < 25 ? "active" : ""}>{age + name}</h2>
<button on:click={assign}>Assign</button>

<div>
  <img src="" alt={name} />
</div>
<div>
  <input type="text" bind:value={name} />
  <input type="text" bind:value={age} />
</div>

<style>
  h1 {
    color: skyblue;
  }

  div {
    margin: 1rem 0;
  }

  .active {
    color: seagreen;
  }
</style>