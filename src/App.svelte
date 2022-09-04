<script>
	import Hello from "./Hello.svelte";
	let name = "world";
</script>

<h1>Hello {name}!</h1>
<button on:click={() => name = "a"}>
	Change
</button>
<Hello/>

<style>
	h1 {
		color: red;
	}
</style>