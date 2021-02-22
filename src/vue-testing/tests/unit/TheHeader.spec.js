// Importamos las utilidades de la librería vue-test-utils
import { mount, shallowMount } from '@vue/test-utils';
// Importamos nuestro componente
import TheHeader from '@/components/TheHeader.vue';
// Definimos de que se trata la prueba
describe('Componente TheHeader.vue', () => {
  // Cogemos el componente
  // const wrapper = mount(TheHeader);

  // Comprobamos que funciona
  test('Comprobamos si el test funciona y el componente existe', () => {
    expect(true).toBeTruthy();
    const wrapper = mount(TheHeader);
    expect(wrapper.exists()).toBe(true)
  });

  // Un ejemplo analizando las clases
  test('Comprobamos que se ha pintado la barra analizando las clases', () => {
    const wrapper = mount(TheHeader);
    expect(wrapper.classes()).toContain('menu')
  });

  // Probamos que se renderiza con la propiedad indicada, un eemplo con shadow
  test('Se renderiza con el mensaje indicado', () => {
    const title = 'Vue Test Test';
    const wrapper = shallowMount(TheHeader, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });

  test('Comprobamos que el título se esta pintando', () => {
    const title = 'Vue Test Test';
    const wrapper = shallowMount(TheHeader, {
      propsData: { title },
    });
    expect(wrapper.html().includes(title)).toBeTruthy();
  });

  // y todo lo que puedas imaginar

});