//*Ejercicio 4 :
//*1.Clase Figura con propiedad color y método area() que devuelve 0.
class figura{
    constructor(color){
        this.color = color;      
    }
    area() {
        return 0;
    }

}

//*2.Clase Rectangulo que herede de Figura y añada base, altura. Sobrescribe area().
class Rectangulo extends figura {
    constructor(color,base,altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area() {
    return this.base * this.altura;
  }

} 

//* 3.Clase Circulo que herede de Figura y añada radio. Sobrescribe area().
class circulo extends figura{
    constructor(color,radio){
        super(color);
        this.radio = radio;
    }

  area() {
    return Math.PI * this.radio ** 2;
  }

}

const rect = new Rectangulo("azul", 5, 4);
const circ = new circulo("rojo", 3);

console.log(` Rectángulo ${rect.color} — área: ${rect.area()}`);
console.log(` Círculo ${circ.color} — área: ${circ.area().toFixed(2)}`);
