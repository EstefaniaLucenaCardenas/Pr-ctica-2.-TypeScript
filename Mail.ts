export class Mail {
  tipo: string;
  direccion: string;

  constructor(tipo: string, direccion: string) {
    this.tipo = tipo;
    this.direccion = direccion;
  }

  // Métodos para acceder a los atributos
  getTipo(): string {
    return this.tipo;
  }

  getDireccion(): string {
    return this.direccion;
  }

  // Método para obtener el correo completo
  getMailCompleto(): string {
    return `${this.tipo}: ${this.direccion}`;
  }
}