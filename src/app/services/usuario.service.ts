import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'ander', nombre: 'Anderson', apellido: 'Bengolea', sexo: 'Masculino'},
    {usuario: 'pedro', nombre: 'Pedro', apellido: 'Rosa', sexo: 'Masculino'},
    {usuario: 'carlos', nombre: 'Carlos', apellido: 'Paredes', sexo: 'Masculino'},
    {usuario: 'hely', nombre: 'Hely', apellido: 'Arotinco', sexo: 'Femenino'},
    {usuario: 'mary', nombre: 'Mary', apellido: 'Marilin', sexo: 'Femenino'},
    {usuario: 'anthony', nombre: 'Anthony', apellido: 'Sánchez', sexo: 'Masculino'}
  ];

  constructor() { }

  getUsuarios() {
    return this.listUsuarios.slice();
  }

  crearUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }
}
