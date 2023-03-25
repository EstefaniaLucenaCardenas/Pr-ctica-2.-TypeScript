export class Telefono {
  tipo: string;
  numero: string;

  constructor(tipo: string, numero: string) {
    this.tipo = tipo;
    this.numero = numero;
  }

  // Métodos para acceder a los atributos
  getTipo(): string {
    return this.tipo;
  }

  getNumero(): string {
    return this.numero;
  }

  // Método para obtener el teléfono completo
  getTelefonoCompleto(): string {
    return `${this.tipo}: ${this.numero}`;
  }
}