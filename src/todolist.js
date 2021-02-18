/* eslint-disable no-undef */

// Usamos Vanila JS
const addTodo = () => {
  // Obtenemos la entrada
  const newTodoInput = document.getElementById('newTodo');
  // Obtenemos la lista de todo
  let currentTodoList = document.getElementById('todoList').innerHTML;
  // Creamos un nuevo nodo o elemento de la lista
  currentTodoList += `<li>${newTodoInput.value}</li>`;
  // Le añadimos el nodo o elemento
  document.getElementById('todoList').innerHTML = currentTodoList;
  // Ponemos el campo en blanco
  newTodoInput.value = '';
};

// Añadmimos el evento
document.getElementById('addTodo').addEventListener('click', addTodo);
