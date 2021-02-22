class Cuenta {
  constructor() {
    this.saldo = 0;
  }

  getSaldo() {
    return this.saldo;
  }

  ingresar(cantidad) {
    this.saldo = cantidad;
  }
}

export default Cuenta;
