import { Persona } from './Persona';
import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';
// Función para modificar los datos de una persona por su DNI
function modificarPersonaPorDNI(personas: Persona[], dni: string, nuevaDireccion: any, nuevoMail: any, nuevoTelefono: any) {
  // Buscar la persona por su DNI
  const personaEncontrada = personas.find(persona => persona.getDni() === dni);

  // Si no se encuentra la persona, mostrar un mensaje de error y salir de la función
  if (!personaEncontrada) {
    console.log(`No se encontró ninguna persona con DNI ${dni}`);
    return;
  }

  // Modificar la dirección, el mail y el teléfono de la persona utilizando los métodos definidos en la clase Persona
  personaEncontrada.agregarDireccion(nuevaDireccion);
  personaEncontrada.agregarMail(nuevoMail);
  personaEncontrada.agregarTelefono(nuevoTelefono);

  // Mostrar un mensaje de éxito
  console.log(`Se modificó correctamente la persona con DNI ${dni}`);
}

// Ejemplo de uso
const direccion1 = new Direccion('Calle de la Rosa', 10, 2, 'B', '28001', 'Madrid', 'Madrid');
const direccion2 = new Direccion('Calle de la Margarita', 5, 1, 'A', '08001', 'Barcelona', 'Barcelona');
const mail1 = new Mail('Personal', 'juan@gmail.com');
const mail2 = new Mail('Trabajo', 'juan@empresa.com');
const telefono1 = new Telefono('Móvil', '666123456');
const telefono2 = new Telefono('Trabajo', '911234567');

const persona1 = new Persona('Juan', 'Pérez', 30, '12345678A', new Date(1992, 10, 2), 'Azul', 'Masculino', [direccion1], [mail1], [telefono1], 'Notas');
const persona2 = new Persona('Laura', 'García', 28, '87654321B', new Date(1993, 5, 21), 'Verde', 'Femenino', [direccion2], [mail2], [telefono2], 'Notas');
const persona3 = new Persona('Pedro', 'Rodríguez', 35, '56789012C', new Date(1986, 2, 12), 'Rojo', 'Masculino', [direccion1, direccion2], [mail1, mail2], [telefono1, telefono2], 'Notas');


const personas = [persona1, persona2, persona3];

console.log('Personas antes de la modificación:');
console.log(personas);

// Modificar la persona con DNI '23456789B'
const nuevaDireccion = { calle: 'Calle Nueva', numero: 10, codigoPostal: '12345', poblacion: 'Madrid', provincia: 'Madrid' };
const nuevoMail = { tipo: 'personal', direccion: 'maria@gmail.com' };
const nuevoTelefono = { tipo: 'trabajo', numero: '912345678' };
modificarPersonaPorDNI(personas, '23456789B', nuevaDireccion, nuevoMail, nuevoTelefono);

console.log('Personas después de la modificación:');
console.log(personas);
