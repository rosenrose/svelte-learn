<script>
  import Todo from "./components/Todo.svelte";
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

<!-- <button on:click={() => console.log(todos)}>d</button> -->

<form on:submit|preventDefault={addTodo}>
  <input type="text" bind:value={text} required />
  <button>Create Todo</button>
</form>

<ul>
  {#each todos as todo (todo.id)}
    <Todo {...{ todo, saveTodos }} />
  {:else}
    <h2>No Todos</h2>
  {/each}
</ul>

<style>
</style>
