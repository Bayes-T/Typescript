//decoradores de clase

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   
  @reportableClassDecorator
  class BugReport {
    type = "report";
    title: string;
   
    constructor(t: string) {
      this.title = t;
    }
  }

//Estoy modificando la clase usando el decorador. Angulas los utiliza mucho para definir si es un pipe, una directiva etc...

//Un decorador es una función que expande su clase añandiéndole funcionalidades especiales.

//Todo en angular es una clase, lo que varía es el decorador