export class Direccion {
  calle: string;
  numero: number;
  piso: number;
  letra: string;
  codigoPostal: string;
  poblacion: string;
  provincia: string;

  constructor(
    calle: string,
    numero: number,
    piso: number,
    letra: string,
    codigoPostal: string,
    poblacion: string,
    provincia: string,

  ) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
  }
  
  // Métodos para acceder a los atributos
  getCalle(): string {
    return this.calle;
  }

  getNumero(): number {
    return this.numero;
  }

  getPiso(): number{
    return this.piso;
  }

  getLetra(): string{
    return this.letra;
  }

  getCodigoPostal(): string {
    return this.codigoPostal;
  }

  getPoblacion(): string {
    return this.poblacion;
  }

  getProvincia(): string {
    return this.provincia;
  }

  // Método para obtener la dirección completa
  getDireccionCompleta(): string {
    let direccionCompleta = `${this.calle}, ${this.numero}`;
    if (this.piso) {
      direccionCompleta += `, ${this.piso}${this.letra}`;
    }
    direccionCompleta += `, ${this.codigoPostal}, ${this.poblacion}, ${this.provincia}`;
    return direccionCompleta;
  }

  // Método para mostrar Dirección
  getCalleCompleta(): string {
    let calleCompleta = `${this.calle} ${this.numero}`;
    if (this.piso) {
      calleCompleta += ` ${this.piso}`;
    }
    if (this.letra) {
      calleCompleta += `${this.letra}`;
    }
    return calleCompleta;
  }
}
