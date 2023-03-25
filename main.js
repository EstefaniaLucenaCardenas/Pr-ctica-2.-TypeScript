"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
// Creamos tres direcciones
var direccion1 = new direccion_1.Direccion("Calle 1", 1, 1, "A", "28001", "Madrid", "Madrid");
var direccion2 = new direccion_1.Direccion("Calle 2", 2, 2, "B", "46002", "Valencia", "Valencia");
var direccion3 = new direccion_1.Direccion("Calle 3", 3, 3, "C", "08001", "Barcelona", "Barcelona");
// Creamos tres correos electrónicos
var mail1 = new mail_1.Mail("personal", "juan@example.com");
var mail2 = new mail_1.Mail("trabajo", "juan.perez@empresa.com");
var mail3 = new mail_1.Mail("otro", "juan.perez@gmail.com");
// Creamos tres números de teléfono
var telefono1 = new telefono_1.Telefono("móvil", "666111222");
var telefono2 = new telefono_1.Telefono("fijo", "912345678");
var telefono3 = new telefono_1.Telefono("trabajo", "912345679");
// Creamos tres personas
var persona1 = new persona_1.Persona("Juan", "Pérez Pérez", 30, "12345678A", new Date(1991, 0, 1), "azul", "hombre", [direccion1], [mail1], [telefono1], "Notas de Juan");
var persona2 = new persona_1.Persona("María", "García García", 25, "87654321B", new Date(1996, 5, 15), "rojo", "mujer", [direccion2], [mail2], [telefono2], "Notas de María");
var persona3 = new persona_1.Persona("Pedro", "Martínez Martínez", 40, "11111111A", new Date(1981, 8, 10), "verde", "hombre", [direccion3], [mail3], [telefono3], "Notas de Pedro");
// Mostramos las personas por consola
console.log(persona1.getPersonaCompleta());
console.log(persona2.getPersonaCompleta());
console.log(persona3.getPersonaCompleta());
