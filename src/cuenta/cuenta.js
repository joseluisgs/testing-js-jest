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
    this.saldo = cantidad;
  }
}

export default Cuenta;
