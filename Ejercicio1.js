//*Ejercicio 1 :
//*1.Una clase Vehiculo con propiedades: marca, modelo, año y un método obtenerDetalles() que devuelva un string con toda la información*//
class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
  }
}

//*2.Una clase Coche que herede de Vehiculo y añada la propiedad numeroPuertas*//
class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
  }
}

//*3.Una clase Moto que herede de Vehiculo y añada la propiedad cilindrada.*//
class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Cilindrada: ${this.cilindrada}cc`;
  }
}

const miCoche = new Coche("Toyota", "Corolla", 2022, 4);
console.log(miCoche.obtenerDetalles());

const miMoto = new Moto("Yamaha", "FZ25", 2023, 250);
console.log(miMoto.obtenerDetalles());