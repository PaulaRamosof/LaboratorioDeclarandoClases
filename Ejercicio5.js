//*Ejercicio 5 :
//*1.Clase Animal con nombre, edad y método emitirSonido().
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    return "Sonido genérico de animal ";
  }
}

//*2.Clase Perro que herede de Animal y sobrescriba emitirSonido().
class Perro extends Animal {
  emitirSonido() {
    return "¡Guau guau!";
  }
  
}

//*3.Clase Gato que herede de Animal y sobrescriba emitirSonido().
class Gato extends Animal {
  emitirSonido() {
    return "¡Miau miau! ";
  }
}

const animal1 = new Animal("Criatura misteriosa", 5);
const perro1 = new Perro("Max", 3);
const gato1 = new Gato("Lupita", 2);

console.log(`${animal1.nombre}: ${animal1.emitirSonido()}`);
console.log(`${perro1.nombre}: ${perro1.emitirSonido()}`);
console.log(`${gato1.nombre}: ${gato1.emitirSonido()}`);