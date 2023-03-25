"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Persona.prototype.getCumpleanos = function () {
        return this.cumpleanos;
    };
    Persona.prototype.setCumpleanos = function (cumpleanos) {
        this.cumpleanos = cumpleanos;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.setColorFavorito = function (colorFavorito) {
        this.colorFavorito = colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.setDirecciones = function (direcciones) {
        this.direcciones = direcciones;
    };
    Persona.prototype.getMails = function () {
        return this.mails;
    };
    Persona.prototype.setMails = function (mails) {
        this.mails = mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.setTelefonos = function (telefonos) {
        this.telefonos = telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };
    // Método para agregar un objeto Direccion al array de direcciones
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    // Método para agregar un objeto Mail al array de mails
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    // Método para agregar un objeto Telefono al array de telefonos
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    // Método para mostrar Persona
    Persona.prototype.getPersonaCompleta = function () {
        var info = "Nombre completo: ".concat(this.nombre, " ").concat(this.apellidos, "\n");
        info += "Edad: ".concat(this.edad, "\n");
        info += "DNI: ".concat(this.dni, "\n");
        info += "Fecha de cumplea\u00F1os: ".concat(this.cumpleanos, "\n");
        info += "Color favorito: ".concat(this.colorFavorito, "\n");
        info += "Sexo: ".concat(this.sexo, "\n\n");
        info += "Direcciones:\n";
        this.direcciones.forEach(function (direccion) {
            info += "".concat(direccion.getCalleCompleta(), " ").concat(direccion.numero);
            if (direccion.piso) {
                info += ", piso ".concat(direccion.piso);
                if (direccion.letra) {
                    info += "".concat(direccion.letra);
                }
            }
            info += "\n".concat(direccion.codigoPostal, " ").concat(direccion.poblacion, " (").concat(direccion.provincia, ")\n\n");
        });
        info += "Mails:\n";
        this.mails.forEach(function (mail) {
            info += "".concat(mail.tipo, ": ").concat(mail.direccion, "\n");
        });
        info += "\nTeléfonos:\n";
        this.telefonos.forEach(function (telefono) {
            info += "".concat(telefono.tipo, ": ").concat(telefono.numero, "\n");
        });
        return info;
    };
    return Persona;
}());
exports.Persona = Persona;

// Crear 3 registros de persona
const persona1 = new Persona("Juan", "Pérez", 30, "12345678A", new Date("1992-03-15"), "Rojo", "Masculino", [direccion1], [mail1], [telefono1], "Notas persona 1");
const persona2 = new Persona("María", "González", 25, "87654321B", new Date("1996-06-20"), "Verde", "Femenino", [direccion2], [mail2], [telefono2], "Notas persona 2");
const persona3 = new Persona("Pedro", "Sánchez", 40, "45678912C", new Date("1982-11-01"), "Azul", "Masculino", [direccion3], [mail3], [telefono3], "Notas persona 3");

// Mostrar los 3 registros de persona con los cambios realizados
console.log("Persona 1:");
console.log(persona1.getPersonaCompleta());
console.log("");
console.log("Persona 2:");
console.log(persona2.getPersonaCompleta());
console.log("");
console.log("Persona 3:");
console.log(persona3.getPersonaCompleta());
