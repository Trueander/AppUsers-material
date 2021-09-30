import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

const listUsuarios: Usuario[] = [
  {usuario: 'ander', nombre: 'Anderson', apellido: 'Bengolea', sexo: 'Masculino'},
  {usuario: 'pedro', nombre: 'Pedro', apellido: 'Rosa', sexo: 'Masculino'},
  {usuario: 'carlos', nombre: 'Carlos', apellido: 'Paredes', sexo: 'Masculino'},
  {usuario: 'hely', nombre: 'Hely', apellido: 'Arotinco', sexo: 'Femenino'},
  {usuario: 'mary', nombre: 'Mary', apellido: 'Marilin', sexo: 'Femenino'},
  {usuario: 'anthony', nombre: 'Anthony', apellido: 'Sánchez', sexo: 'Masculino'}

];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = listUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

}
