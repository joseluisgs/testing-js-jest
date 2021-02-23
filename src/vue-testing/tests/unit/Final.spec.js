import { mount } from '@vue/test-utils';
import Final from '@/components/Final.vue';

describe('Final: Testeo de Funcionalidades', () => {
  // creamos el mock wrapper de nuestro componente
  const wrapper = mount(Final);
  // Inspeccionamos que los datos del componente
  test('Final tiene datos: data', () => {
    expect(typeof Final.data).toBe('function');
  });

  test('Final es una instancia de Vue', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('Final tenderiza el texto correcto', () => {
    expect(wrapper.html()).toContain('¿Cuál es la suma de estos números?');
  });

  // Comprobamos la existencia de elementos
  test('Final tiene un botón', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  test('Final renderiza los datos correctos con diferentes valores', async () => {
    wrapper.setData({ x1: 5, x2: 10 }); // Inicio los valores
    // Espero el siguiente tick, que ya estará renderizado y las propiedads reactivas actualizadas.
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('5');
    expect(wrapper.text()).toContain('10'); // Compruebo que están
  });

  test('Final botón realiza la suma sin valor de entrada', () => {
    expect(wrapper.vm.message).toBe('');
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.message).toBe('¡INTÉNTALO OTRA VEZ! 🤨');
  });

  test('Final botón realiza la suma y no es correcta', async () => {
    // Iniciamos los datos
    wrapper.setData({ x1: 7, x2: 8 });
    await wrapper.vm.$nextTick();

    // Comprobamos que están
    expect(wrapper.text()).toContain('7');
    expect(wrapper.text()).toContain('8');

    // Simulamos que hemos metido el valor 12, que es incorrect
    const textInput = wrapper.find('input');
    await textInput.setValue('12');

    // Pulsamos el botón
    const button = wrapper.find('button');
    button.trigger('click');

    // 12 debe ser el valor metido, pero el mensaje es que hemos fallado
    expect(wrapper.vm.guess).toBe('12');
    expect(wrapper.vm.message).toBe('¡INTÉNTALO OTRA VEZ! 🤨');
  });

  test('Final botón realiza la suma y no es correcta', async () => {
    // Iniciamos los datos
    wrapper.setData({ x1: 7, x2: 8 });
    await wrapper.vm.$nextTick();

    // Comprobamos que están
    expect(wrapper.text()).toContain('7');
    expect(wrapper.text()).toContain('8');

    // Simulamos que hemos metido el valor 12, que es incorrect
    const textInput = wrapper.find('input');
    await textInput.setValue('15');

    // Pulsamos el botón
    const button = wrapper.find('button');
    button.trigger('click');

    // 12 debe ser el valor metido, pero el mensaje es que hemos fallado
    expect(wrapper.vm.guess).toBe('15');
    expect(wrapper.vm.message).toBe('¡HAS ACERTADO! 😁');
  });

  // Vamos a por el 100% de cobertura
  test('El botón Refresh, realmente refresca', async () => {
    wrapper.vm.refresh();
    expect(wrapper.vm.guess).toBe('');
    expect(wrapper.vm.message).toBe('');
    expect(wrapper.vm.x1).toBeGreaterThanOrEqual(0);
    expect(wrapper.vm.x2).toBeGreaterThanOrEqual(0);
  });
});
