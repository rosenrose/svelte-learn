<script>
  // import { onMount } from "svelte";
  // onMount(() => {
  //   const box = document.querySelector(".box");
  //   box.addEventListener("click", () => isRed = !isRed);
  // });

  let name = "world!";
  let isRed = false;

  let text = "text";
</script>

<h1>Hello {name}</h1>
<div class="box"
     style="--color: {isRed ? 'red' : 'seagreen'};"
     on:click={() => isRed = !isRed}
     on:mouseenter={() => name = "enter"}
     on:mouseleave={() => name = "leave"}
     >
</div>

<h2>{text}</h2>
<!-- <input type="text" value={text} on:input={(e) => text = e.target.value} /> -->
<input type="text" bind:value={text} />

<style>
  h1 {
    color: skyblue;
  }
  .box {
    width: 15rem;
    height: 10rem;
    background-color: var(--color);
  }
</style>