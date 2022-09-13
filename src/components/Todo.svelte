<script context="module">
  let componentsCount = 0;

  export function alertCount() {
    alert(componentsCount);
  }
</script>

<script>
  import { todosStore } from "../store";
  export let todo, saveTodos;

  componentsCount += 1;
  console.log(`total: ${componentsCount}`);
  let isEdit = false;

  const toggleEdit = () => (isEdit = !isEdit);

  const onEdit = () => {
    if (!todo.text.trim()) {
      return;
    }

    toggleEdit();
    saveTodos();
  };

  const deleteTodo = () => {
    if (!confirm("delete?")) {
      return;
    }

    $todosStore = $todosStore.filter((t) => t.id !== todo.id);
    saveTodos();
  };

  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";

  onMount(() => console.log(todo.text, "Mounted"));
  onDestroy(() => {
    console.log(todo.text, "Destroyed");
    componentsCount -= 1;
    console.log(`total: ${componentsCount}`);
  });
  beforeUpdate(() => console.log(todo.text, "Before Update"));
  afterUpdate(() => console.log(todo.text, "After Update"));
</script>

<li>
  <slot name="header">no header</slot>
  {#if isEdit}
    <form on:submit|preventDefault={onEdit}>
      <input type="text" bind:value={todo.text} required />
      <button>Done</button>
    </form>
  {:else}
    {todo.text}
    <button on:click={toggleEdit}>Edit</button>
  {/if}
  <button on:click={deleteTodo}>❌</button>
  <slot name="footer">no footer</slot>
</li>

<!-- <slot>slot</slot> -->
<style>
  form {
    display: inline;
  }

  :global(form) :global(input) {
    border: none;
  }
</style>
