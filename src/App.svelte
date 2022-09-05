<script>
  import { nameStore } from "./store";
  import Parent from "./components/Parent.svelte";

  // let name = $nameStore;
  // $: $nameStore = name;
</script>

<input type="text" bind:value={$nameStore} />
<Parent />

<style>
</style>
