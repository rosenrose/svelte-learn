import { writable } from "svelte/store";

export const nameStore = writable("init value");

export const TODOS_KEY = "todos";

const todos = localStorage.getItem(TODOS_KEY);
export const todosStore = writable(todos ? JSON.parse(todos) : []);
