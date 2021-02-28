/* eslint-disable global-require */
/* eslint-disable no-undef */
// Testeado DOM

// Testando DOM
describe('testing-dom basico', () => {
  test('Testea si ha añadido una tarea a la lista usando Vanilla JS', () => {
    // Obtenemos de la página web lo que necesitemos
    document.body.innerHTML = `<input id="newTodo" />
      <button id="addTodo">Añadir Tarea</button>
      <ol id="todoList"></ol>`;

    // Recogemos la lógica
    require('../todolist');

    // Obtenemos el input, el botón, y la lista
    const newTodoInput = document.getElementById('newTodo');
    const addTodoBtn = document.getElementById('addTodo');
    const currentTodoList = document.getElementById('todoList');

    // Simulamos que hemos metido un valor
    newTodoInput.value = 'New todolist!';
    // Pulsamos click
    addTodoBtn.click();
    // Debemos esperar obtener que el nuevo elemento esté dentro de la lista
    expect(currentTodoList.innerHTML).toBe('<li>New todolist!</li>');
  });
});
