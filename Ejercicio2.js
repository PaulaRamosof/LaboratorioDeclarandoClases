//*Ejercicio 2 :
//*1.Clase Empleado con propiedades: nombre, edad, salarioBase y método calcularSalario() que devuelve el salario base
class Empleado {
  constructor(nombre, edad, salarioBase) {
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }
}

//*2.Clase Gerente que herede de Empleado y añada bonificacion.Sobrescribe calcularSalario() para que sume la bonificación.
class Gerente extends Empleado {
  constructor(nombre, edad, salarioBase, bonificacion) {
    super(nombre, edad, salarioBase);
    this.bonificacion = bonificacion;
  }

  calcularSalario() {
    return this.salarioBase + this.bonificacion;
  }
}

//*3.Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base.
class Desarrollador extends Empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }


}

const empleado1 = new Empleado("Luis", 35, 3000000);
const gerente1 = new Gerente("Ana", 40, 5000000, 1500000);
const desarrollador1 = new Desarrollador("Sofi", 28, 4000000, "JavaScript");

console.log(` ${empleado1.nombre} gana $${empleado1.calcularSalario()}`);
console.log(` ${gerente1.nombre} gana $${gerente1.calcularSalario()} con bonificación`);
console.log(` ${desarrollador1.nombre} gana $${desarrollador1.calcularSalario()} y programa en ${desarrollador1.lenguaje}`);
