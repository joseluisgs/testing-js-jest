/**
 * Clase para el maneo de una cuenta
 */
class Cuenta {
  /**
   * Costructor
   */
  constructor() {
    this.saldo = 0;
  }

  /**
   * Devuelve el saldo
   */
  getSaldo() {
    return this.saldo;
  }

  /**
   * Ingresa un saldo
   * @param {number} cantidad
   */
  ingresar(cantidad) {
    const esValida = this.validarCantidadIngresada(cantidad);
    if (esValida) {
      this.saldo += cantidad;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  validarCantidadIngresada(cantidad) {
    // eslint-disable-next-line eqeqeq
    if (cantidad.toFixed(2) != cantidad) {
      return false;
    }

    if (cantidad < 0) {
      return false;
    }

    if (cantidad > 6000.00) {
      return false;
    }

    return true;
  }
}

export default Cuenta;
