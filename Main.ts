import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

// Creamos tres direcciones
const direccion1 = new Direccion("Calle 1", 1, 1,"A", "28001", "Madrid", "Madrid");
const direccion2 = new Direccion("Calle 2", 2, 2,"B", "46002", "Valencia", "Valencia");
const direccion3 = new Direccion("Calle 3", 3, 3,"C", "08001", "Barcelona", "Barcelona");

// Creamos tres correos electrónicos
const mail1 = new Mail("personal", "juan@example.com");
const mail2 = new Mail("trabajo", "juan.perez@empresa.com");
const mail3 = new Mail("otro", "juan.perez@gmail.com");

// Creamos tres números de teléfono
const telefono1 = new Telefono("móvil", "666111222");
const telefono2 = new Telefono("fijo", "912345678");
const telefono3 = new Telefono("trabajo", "912345679");

// Creamos tres personas
const persona1 = new Persona(
  "Juan",
  "Pérez Pérez",
  30,
  "12345678A",
  new Date(1991, 0, 1),
  "azul",
  "hombre",
  [direccion1],
  [mail1],
  [telefono1],
  "Notas de Juan"
);
const persona2 = new Persona(
  "María",
  "García García",
  25,
  "87654321B",
  new Date(1996, 5, 15),
  "rojo",
  "mujer",
  [direccion2],
  [mail2],
  [telefono2],
  "Notas de María"
);
const persona3 = new Persona(
  "Pedro",
  "Martínez Martínez",
  40,
  "11111111A",
  new Date(1981, 8, 10),
  "verde",
  "hombre",
  [direccion3],
  [mail3],
  [telefono3],
  "Notas de Pedro"
);

// Mostramos las personas por consola
console.log(persona1.getPersonaCompleta());
console.log(persona2.getPersonaCompleta());
console.log(persona3.getPersonaCompleta());
