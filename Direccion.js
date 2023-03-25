"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    // Métodos para acceder a los atributos
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.getCodigoPostal = function () {
        return this.codigoPostal;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    // Método para obtener la dirección completa
    Direccion.prototype.getDireccionCompleta = function () {
        var direccionCompleta = "".concat(this.calle, ", ").concat(this.numero);
        if (this.piso) {
            direccionCompleta += ", ".concat(this.piso).concat(this.letra);
        }
        direccionCompleta += ", ".concat(this.codigoPostal, ", ").concat(this.poblacion, ", ").concat(this.provincia);
        return direccionCompleta;
    };
    // Método para mostrar Dirección
    Direccion.prototype.getCalleCompleta = function () {
        var calleCompleta = "".concat(this.calle, " ").concat(this.numero);
        if (this.piso) {
            calleCompleta += " ".concat(this.piso);
        }
        if (this.letra) {
            calleCompleta += "".concat(this.letra);
        }
        return calleCompleta;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
