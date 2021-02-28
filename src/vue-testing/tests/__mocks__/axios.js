/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */

export default {
  
  async get() {
    return {
      data: [{
        id: 1,
        name: 'Primera Tarea',
      }, {
        id: 2,
        name: 'Segunda Tarea',
      }],
    };
  },
  async post(path, data) {
    return {
      data: {
        id: 3,
        name: data.name,
      },
    };
  },

  async delete(path) { },

  async put(path, data) {
    return {
      data: {
        id: path[path.length - 1],
        name: data.name,
      },
    };
  },
};
