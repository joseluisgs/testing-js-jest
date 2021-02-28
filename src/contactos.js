/* eslint-disable no-throw-literal */

// Ojo que puede chocar con el mock de vue al haberlo construido...
import api from 'axios';
// Vamos a trabajar con un array de contactos y sus operaciones
let contactos = [];

export default {

  /**
   * Incluye un contacto en nuestra lista de contactos
   * @param {*} contacto Un Contacto
   */
  incluir(contacto) {
    if (
      Object.prototype.hasOwnProperty.call(contacto, 'nombre')
      && Object.prototype.hasOwnProperty.call(contacto, 'email')
      && Object.prototype.hasOwnProperty.call(contacto, 'id')
      // contacto.nombre !== undefined
      // && contacto.email !== undefined
      // && contacto.email !== undefined
    ) {
      contactos.push(contacto);
    } else {
      throw new Error('Formato inválido');
    }
  },

  /**
   * Elimina un contacto de nuestra lista dado su id
   * @param {*} contactoId ID del contacto
   */
  borrar(contactoId) {
    // Mapeamos el array para quedarnos solo con el ID y buscamos si coincide
    const index = contactos
      .map(({ id }) => id)
      .findIndex((id) => id === contactoId);
    // Podriamos hacerlo
    // const index = contactos.findIndex((id) => id === contactoId);

    // Si coicide lo quitamos
    if (index > -1) {
      // Compiamos el array con todos los qu ehay menos el que queemos quitar
      contactos = [
        ...contactos.slice(0, index),
        ...contactos.slice(index + 1),
      ];
      // Mejor y mas alternativo. Analiza las diferencias :)
      // contactos.splice(index, 1);
    }
  },

  /**
   * Reinicia la lista o pone a vacía la lista de contactos
   */
  reiniciar() {
    contactos = [];
  },

  /**
   * Devuelve una lista de contactos
   */
  db() {
    return [
      ...contactos,
    ];
  },

  /**
   * Devuleve el número de ocurrencias de un EndPoint
   * @param {*} url url del ednpoint
   */
  async starwars(url) {
    // https://swapi.dev/
    return api.get(url)
      .then(({ data }) => data.count)
      .catch((error) => (error));
  },
};
