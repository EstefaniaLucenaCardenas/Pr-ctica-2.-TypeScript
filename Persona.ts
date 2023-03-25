import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumpleanos: Date;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Direccion[];
  private mails: Mail[];
  private telefonos: Telefono[];
  private notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: Date,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
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

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellidos(): string {
    return this.apellidos;
  }

  public setApellidos(apellidos: string): void {
    this.apellidos = apellidos;
  }

  public getEdad(): number {
    return this.edad;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }

  public getDni(): string {
    return this.dni;
  }

  public setDni(dni: string): void {
    this.dni = dni;
  }

  public getCumpleanos(): Date {
    return this.cumpleanos;
  }

  public setCumpleanos(cumpleanos: Date): void {
    this.cumpleanos = cumpleanos;
  }

  public getColorFavorito(): string {
    return this.colorFavorito;
  }

  public setColorFavorito(colorFavorito: string): void {
    this.colorFavorito = colorFavorito;
  }

  public getSexo(): string {
    return this.sexo;
  }

  public setSexo(sexo: string): void {
    this.sexo = sexo;
  }

  public getDirecciones(): Direccion[] {
    return this.direcciones;
  }

  public setDirecciones(direcciones: Direccion[]): void {
    this.direcciones = direcciones;
  }

  public getMails(): Mail[] {
    return this.mails;
  }

  public setMails(mails: Mail[]): void {
    this.mails = mails;
  }

  public getTelefonos(): Telefono[] {
    return this.telefonos;
  }

  public setTelefonos(telefonos: Telefono[]): void {
    this.telefonos = telefonos;
  }

  public getNotas(): string {
    return this.notas;
  }

  public setNotas(notas: string): void {
    this.notas = notas;
  }

  // Método para agregar un objeto Direccion al array de direcciones
  agregarDireccion(direccion: Direccion): void {
    this.direcciones.push(direccion);
  }
  // Método para agregar un objeto Mail al array de mails
  agregarMail(mail: Mail): void {
    this.mails.push(mail);
  }

  // Método para agregar un objeto Telefono al array de telefonos
  agregarTelefono(telefono: Telefono): void {
    this.telefonos.push(telefono);
  }

  // Método para mostrar Persona
  getPersonaCompleta(): string {
    let info: string = `Nombre completo: ${this.nombre} ${this.apellidos}\n`;
    info += `Edad: ${this.edad}\n`;
    info += `DNI: ${this.dni}\n`;
    info += `Fecha de cumpleaños: ${this.cumpleanos}\n`;
    info += `Color favorito: ${this.colorFavorito}\n`;
    info += `Sexo: ${this.sexo}\n\n`;

    info += "Direcciones:\n";
    this.direcciones.forEach((direccion) => {
      info += `${direccion.getCalleCompleta()} ${direccion.numero}`;
      if (direccion.piso) {
        info += `, piso ${direccion.piso}`;
        if (direccion.letra) {
          info += `${direccion.letra}`;
        }
      }
      info += `\n${direccion.codigoPostal} ${direccion.poblacion} (${direccion.provincia})\n\n`;
    });

    info += "Mails:\n";
    this.mails.forEach((mail) => {
      info += `${mail.tipo}: ${mail.direccion}\n`;
    });

    info += "\nTeléfonos:\n";
    this.telefonos.forEach((telefono) => {
      info += `${telefono.tipo}: ${telefono.numero}\n`;
    });

    return info;
  }

  
}
