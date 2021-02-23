<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-md-8 col-lg-8 offset-lg-2 offset-md-2">
        <div class="card mt-5">
          <div class="card-body">
            <input
              data-testid="todo-input"
              @keyup.enter="(e) => (editing ? updateTodo() : saveTodo())"
              v-model="newTodo"
              type="text"
              class="form-control p-3"
              placeholder="Añadir tarea ..."
            />
            <ul class="list-group" v-if="!editing" data-testid="todos">
              <li
                :data-testid="`todo-${todo.id}`"
                class="list-group-item"
                v-for="todo in todos"
                :key="todo.id"
              >
                {{ todo.name }}
                <div class="float-right">
                  <button
                    :data-testid="`edit-button-${todo.id}`"
                    class="btn btn-sm btn-primary mr-2"
                    @click="editTodo(todo)"
                  >
                    Editar
                  </button>
                  <button
                    :data-testid="`delete-button-${todo.id}`"
                    class="btn btn-sm btn-danger"
                    @click="deleteTodo(todo)"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
