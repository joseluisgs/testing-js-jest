<template>
  <div id="todos">
    <input
      data-testid="todo-input"
      @keyup.enter="(e) => (editing ? updateTodo() : saveTodo())"
      v-model="newTodo"
      type="text"
      placeholder="Añadir tarea ..."
    />
    <ul v-if="!editing" data-testid="todos">
      <li
        :data-testid="`todo-${todo.id}`"
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.name }}
        <div>
          <button
            :data-testid="`edit-button-${todo.id}`"
            @click="editTodo(todo)"
          >
            Editar
          </button>
          <button
            :data-testid="`delete-button-${todo.id}`"
            @click="deleteTodo(todo)"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ToDo',

  // Ciclo de vida al montar
  mounted() {
    this.fetchTodos();
  },

  // Mi modelo de datos
  data: () => ({
    todos: [],
    newTodo: '',
    editing: false,
    editingIndex: null,
    apiUrl: 'https://5aa775d97f6fcb0014ee249e.mockapi.io',
  }),

  // Mis métodos
  methods: {
    // Salva una tarea
    async saveTodo() {
      const { data } = await axios.post(`${this.apiUrl}/todos`, {
        name: this.newTodo,
      });
      this.todos.push(data);
      this.newTodo = '';
    },

    // Borra una tarea
    async deleteTodo(todo) {
      await axios.delete(`${this.apiUrl}/todos/${todo.id}`);
      this.todos.splice(this.todos.indexOf(todo), 1);
    },

    // Edita una tarea
    editTodo(todo) {
      this.editing = true;
      this.newTodo = todo.name;
      this.editingIndex = this.todos.indexOf(todo);
    },

    // Actualiza la tarea
    async updateTodo() {
      const todo = this.todos[this.editingIndex];
      const { data } = await axios.put(`${this.apiUrl}/todos/${todo.id}`, {
        name: this.newTodo,
      });
      this.newTodo = '';
      this.editing = false;
      this.todos.splice(this.todos.indexOf(todo), 1, data);
    },

    // Obtiene todas las tareas
    async fetchTodos() {
      const { data } = await axios.get(`${this.apiUrl}/todos`);
      this.todos = data;
    },
  },
};
</script>
<style>
#todos {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
.inline * {
  display: inline-block;
}
</style>
