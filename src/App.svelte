<script>
  import Fruits from "./components/Fruits.svelte";

  let fruits = ["apple", "banana", "grape", "peach"];
</script>

<Fruits {fruits} />
<Fruits {fruits} reverse />
<Fruits {fruits} slice="-2" />
<Fruits {fruits} slice={[0, 3]} reverse />
<Fruits {fruits} slice="0, 3" />

<style>
</style>
