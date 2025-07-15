//*Ejercicio 3 :
//*1.Clase Producto con nombre, precio, marca y método descripcion().
class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }

  descripcion() {
    return `${this.nombre} de ${this.marca} cuesta $${this.precio}`;
  }
}

//*2.Clase Telefono que herede de Producto y añada almacenamiento, ram
class Telefono extends Producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca);
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }

  descripcion() {
    return `${super.descripcion()} |  ${this.almacenamiento}GB - RAM: ${this.ram}GB`;
  }
}

//*3.Clase Laptop que herede de Producto y añada procesador, pulgadas.
class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }

  descripcion() {
    return `${super.descripcion()} | CPU: ${this.procesador} - ${this.pulgadas}"`;
  }
}

const celular = new Telefono("Galaxy S21", 3200000, "Samsung", 128, 8);
const portatil = new Laptop("MacBook Pro", 8500000, "Apple", "M2", 13);

console.log(celular.descripcion());
console.log(portatil.descripcion());
