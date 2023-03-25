"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    // Métodos para acceder a los atributos
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    // Método para obtener el teléfono completo
    Telefono.prototype.getTelefonoCompleto = function () {
        return "".concat(this.tipo, ": ").concat(this.numero);
    };
    return Telefono;
}());
exports.Telefono = Telefono;
