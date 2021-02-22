// Importamos las utilidades de la librería vue-test-utils
import { mount, shallowMount } from '@vue/test-utils';
// Importamos nuestro componente
import TheHeader from '@/components/TheHeader.vue';
import ChildComponent from '@/components/Child.vue';
import ParentComponent from '@/components/Parent.vue';
import Post from '@/components/Events.vue';

// Definimos de que se trata la prueba
describe('Componente TheHeader.vue', () => {
  // Cogemos el componente
  // const wrapper = mount(TheHeader);

  // Comprobamos que funciona
  test('Comprobamos si el test funciona y el componente existe', () => {
    expect(true).toBeTruthy();
    const wrapper = mount(TheHeader);
    expect(wrapper.exists()).toBe(true);
  });

  // Un ejemplo analizando las clases
  test('Comprobamos que se ha pintado la barra analizando las clases', () => {
    const wrapper = mount(TheHeader);
    expect(wrapper.classes()).toContain('menu');
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

  // Otra forma de comprobar si se ha pintado o exixte es usando refs
  test('El componente se ha pintado', () => {
    const wrapper = mount(TheHeader);
    expect(wrapper.vm.$refs.menu).not.toBeUndefined();
  });

  // Otra forma de añadirle una propiedad es con setProps, pero es asíncorno
  test('Comprobamos que el título se esta pintando', async () => {
    const wrapper = mount(TheHeader);
    await wrapper.setProps({ title: 'Menú APP' });
    expect(wrapper.html().includes('Menú APP')).toBeTruthy();
  });

  // y todo lo que puedas imaginar

  describe('Probamos las dos formas de montar componentes', () => {
    describe('Comprobamos el componente hijo', () => {
      const wrapperMount = mount(ChildComponent);
      const wrapperShallowMount = shallowMount(ChildComponent);
      console.log('---- Mount ----');
      console.log(wrapperMount.html());
      console.log('---------------');
      console.log('---- shallowMount ----');
      console.log(wrapperShallowMount.html());
      console.log('----------------------');
    });

    describe('Comprobamos el componente padre', () => {
      const wrapperMount = mount(ParentComponent);
      const wrapperShallowMount = shallowMount(ParentComponent);
      console.log('---- Mount ----');
      console.log(wrapperMount.html());
      console.log('---------------');
      console.log('---- shallowMount ----');
      console.log(wrapperShallowMount.html());
      console.log('----------------------');
    });
  });

  // podemos montar propiedades con propsData
  describe('Montamos los componentes modificando las propiedades', () => {
    test('Mount Parent con las nuevas propiedades usando propsData', () => {
      const wrapperMount = mount(ParentComponent, {
        propsData: {
          message: 'Mensaje prueba jest / vue-test-utils',
        },
      });
      expect(wrapperMount.find('ul li:nth-of-type(2)').text()).toBe('message: Mensaje prueba jest / vue-test-utils');
    });
  });

  // Podemos moetar propiedades con setProps, pero es async/await
  describe('Montamos los componentes modificando las propiedades', () => {
    test('Mount Parent usando setProps', async () => {
      const wrapperMount = mount(ParentComponent);
      await wrapperMount.setProps({ message: 'Mensaje prueba jest / vue-test-utils' });
      expect(wrapperMount.find('ul li:nth-of-type(2)').text()).toBe('message: Mensaje prueba jest / vue-test-utils');
    });
  });

  // Test sobre propiedades conputadas
  describe('Probando las propiedades computadas', () => {
    test('Probamos las propiedades computadas', async () => {
      const wrapperMount = mount(ParentComponent);
      expect(wrapperMount.find('ul li:nth-of-type(3)').text()).toBe('Propiedad computada:');

      await wrapperMount.setProps({ message: 'vue-test-utils' });
      expect(wrapperMount.find('ul li:nth-of-type(2)').text()).toBe('message: vue-test-utils');
      expect(wrapperMount.find('ul li:nth-of-type(3)').text()).toBe('Propiedad computada: vue-test-utils');
      // Propiedad computada que se llama propComputed
      expect(wrapperMount.vm.propComputed).toBe('Propiedad computada: vue-test-utils');
    });
  });

  // Testeando eventos y métodos
  describe('Testeando Métodos y eventos', () => {
    test('Cambia el título cuando el boton es pulsado por métodos', () => {
      const wrapper = shallowMount(Post);
      expect(wrapper.vm.title).toBe('Hola'); // valor inicial del data title
      wrapper.vm.changeTitle(); // llamamos al método
      expect(wrapper.vm.title).toBe('Adiós'); // Valor final
    });

    test('Cambia el título cuando el boton es pulsado por eventos', () => {
      const wrapper = shallowMount(Post);
      expect(wrapper.vm.title).toBe('Hola'); // valor inicial del data title
      const button = wrapper.find('button'); // Tomamos el botón
      button.trigger('click'); // Disparamos su evento
      expect(wrapper.vm.title).toBe('Adiós'); // Valor final
    });
  });
});
