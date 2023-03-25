"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    // Métodos para acceder a los atributos
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    // Método para obtener el correo completo
    Mail.prototype.getMailCompleto = function () {
        return "".concat(this.tipo, ": ").concat(this.direccion);
    };
    return Mail;
}());
exports.Mail = Mail;
