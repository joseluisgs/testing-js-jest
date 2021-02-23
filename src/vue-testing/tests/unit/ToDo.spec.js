import ToDo from '@/components/ToDo.vue';
import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';

describe('Bateía de tes ToDo.vue', () => {
  test('Muestra la lista de Tareas al montarse el componente', async () => {
    // Montamos el componente con sus hijos
    const wrapper = mount(ToDo);
    // Vaciamos las promesas pendientes asociadas al metodo fetchTodos que
    // se inicia al moontar el componente.
    // Mira el código tiene un mounted el componente que hace una consulta
    // a la API Rest aunque la mockeemos
    // De esta manera las marcamos como resuletas al usar el mock
    await flushPromises();

    // Encontramos la lista desordenada, con nuestro identificador data-testid
    const todosList = wrapper.find('[data-testid="todos"]');

    // Experamos que la lista tenga al menos dos componentes
    expect(todosList.element.children.length).toBe(2);
  });

  test('Borra una tarea y la quita de la lista', async () => {
    // Montamos el componente con sus hijos
    const wrapper = mount(ToDo);
    // Resilvemos las promesas pendientes
    await flushPromises();

    // Encontramos la lista desordenada, con nuestro identificador data-testid
    // y esperamos que tenga dos hijos
    expect(wrapper.find('[data-testid="todos"]').element.children.length).toBe(2);

    // Buscamos el botón para borrar
    wrapper.find('[data-testid="delete-button-1"]').trigger('click');

    // Resolvemos las promesas asociadas al evento de borrar, llamaría a deleteTodo
    await flushPromises();

    // La lista solo debe tener un solo hijo
    expect(wrapper.find('[data-testid="todos"]').element.children.length).toBe(1);

    // la tarea 1 debe haber desaparecido
    expect(wrapper.find('[data-testid="todo-1"]').exists()).toBe(false);
  });

  test('Crea una nueva tarea y la inserta en la lista', async () => {
    const NEW_TODO_TEXT = 'Aprobar testing con Vue';

    // Montamos
    const wrapper = mount(ToDo);

    // Resolvemos las promesa de asociada al mounted: fetchTodos
    await flushPromises();

    // Obtenemos el input
    const todoInput = wrapper.find('[data-testid="todo-input"]');

    // le asignamos el valor
    todoInput.element.value = NEW_TODO_TEXT;

    // Simulamos el evento que esta escribiendo
    todoInput.trigger('input');

    // simulamos el evento como si hubiese pulsado enter
    todoInput.trigger('keyup.enter');

    // Resolvemos la promesa asociada al evento enter, que es saveTodo
    await flushPromises();

    // La lista debe tener ahora tres
    expect(wrapper.find('[data-testid="todos"]').element.children.length).toBe(3);

    // Como nuestro Mock de Axios devuelve una tarea con 3,
    // esperamos que nuestro elemento o tarea nueva
    // esté en el DOM y que el texto de esta sea el que
    // hemos indicado y pasado al input
    expect(wrapper.find('[data-testid="todo-3"]').text())
      .toMatch(NEW_TODO_TEXT);
  });

  test('Actualiza una tarea existente', async () => {
    const UPDATED_TODO_TEXT = 'Tarea actualizada';

    // Montamos el componente
    const wrapper = mount(ToDo);

    // Resolvemos las promesa de asociada al mounted: fetchTodos
    await flushPromises();

    // Simulamos el evento click en el botñon de editar de la tarea 1
    wrapper.find('[data-testid="edit-button-1"]').trigger('click');

    // Debemos esperar que los objetos reactivos se actualicen, un tick.
    await wrapper.vm.$nextTick();

    // La lista de tarea no debe ser visible
    expect(wrapper.find('[data-testid="todos"]').exists()).toBe(false);

    // Tomamos el input
    const todoInput = wrapper.find('[data-testid="todo-input"]');

    // le añadimos el valor del texto
    todoInput.element.value = UPDATED_TODO_TEXT;

    // simulamos los eventos asociados a la pulsación de cada tecla
    todoInput.trigger('input');

    // simulamos el evento de hber pulsado enter
    todoInput.trigger('keyup.enter');

    // Resolvemos la promesa del metodo updateTodo aunque esté mockeado y
    // de paso actualiza la interfaz
    await flushPromises();

    // La lista de tareas debería estar visible
    expect(wrapper.find('[data-testid="todos"]').exists()).toBe(true);

    // El texto de nuestra tarea 1 que hemos modificado debe ser el que nosotros hemos indicado.
    expect(wrapper.find('[data-testid="todo-1"]').text()).toMatch(UPDATED_TODO_TEXT);
  });
});
