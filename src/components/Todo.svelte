<script>
  import { todosStore } from "../store";
  export let todo, saveTodos;

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
</script>

<li>
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
</li>

<style>
  form {
    display: inline;
  }
</style>
