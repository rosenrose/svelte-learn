<script>
  import Todo, { alertCount } from "./components/Todo.svelte";
  import { todosStore, TODOS_KEY } from "./store";

  let text = "";
  $: todos = $todosStore;

  const saveTodos = () => localStorage.setItem(TODOS_KEY, JSON.stringify($todosStore));

  const addTodo = () => {
    if (!text.trim()) {
      text = "";
      return;
    }

    $todosStore = [...todos, { id: Date.now(), text }];
    saveTodos();

    text = "";
  };
</script>

<button on:click={alertCount}>Count</button>

<form on:submit|preventDefault={addTodo}>
  <input type="text" bind:value={text} required />
  <button>Create Todo</button>
</form>

<ul>
  {#each todos as todo (todo.id)}
    <Todo {...{ todo, saveTodos }}>
      <!-- <span>hello</span> -->
      <h1 slot="header">head</h1>
      <p slot="footer">foot</p>
    </Todo>
  {:else}
    <h2>No Todos</h2>
  {/each}
  <style>
    button {
      border-radius: 1rem;
    }
  </style>
</ul>

<style>
  :global(form) {
    border: 1px dashed cyan;
    width: fit-content;
  }
</style>
