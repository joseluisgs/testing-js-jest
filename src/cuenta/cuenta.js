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
   * @param {number} cantidad numero positivo dos decimales
   */
  ingresar(cantidad) {
    const esValida = this.validarCantidadIngresada(cantidad);
    if (esValida) {
      this.saldo += cantidad;
    }
  }

  /**
   * Valida la cantidad
   * @param {*} cantidad
   */
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

  /**
   * Retira una cantidad de dinero de una cuenta
   * @param {number} cantidad numero positivo dos decimales
   */
  retirar(cantidad) {
    const esValida = this.validarCantidadRetirada(cantidad);
    if (esValida) {
      this.saldo -= cantidad;
    }
  }

  /**
   * Valida la cantidad a retirar
   * @param {*} cantidad
   */
  validarCantidadRetirada(cantidad) {
    // eslint-disable-next-line eqeqeq
    if (cantidad.toFixed(2) != cantidad) {
      return false;
    }

    if (cantidad < 0) {
      return false;
    }

    if (cantidad > this.saldo) {
      return false;
    }

    if (cantidad > 6000.00) {
      return false;
    }

    return true;
  }

  /**
   * Realiza una transfrenecia a una cuenta de destino
   * @param {*} cuentaDestino
   * @param {*} cantidad
   */
  transferencia(cuentaDestino, cantidad) {
    const esValida = this.validarCantidadTransferencia(cantidad);
    if (esValida) {
      this.retirar(cantidad);
      cuentaDestino.ingresar(cantidad);
    }
  }

  /**
   * Valida la cantidad para una trasfrerencia
   * @param {*} cantidad
   */
  validarCantidadTransferencia(cantidad) {
    if (cantidad < 0) {
      return false;
    }

    if (cantidad > this.saldo) {
      return false;
    }

    if (cantidad > 3000) {
      return false;
    }

    return true;
  }
}

// Mejoras: Lanzar excepciones y capturarlas en los test

export default Cuenta;
