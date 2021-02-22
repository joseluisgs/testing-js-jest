// Importamos las utilidades de la librería vue-test-utils
import { mount } from '@vue/test-utils';
// Importamos nuestro componente
import TheHeader from '@/components/TheHeader.vue';
// Definimos de que se trata la prueba
describe('Componente TheHeader.vue', () => {
  // Test
  it('El componente se ha pintado', () => {
    const wrapper = mount(TheHeader);
  });
});