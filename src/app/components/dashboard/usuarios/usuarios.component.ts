import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  listUsuarios: Usuario[] = [];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];

  dataSource!: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.listUsuarios = this._usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number) {
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();
    this.mensajeCofirmacionEliminado()


  }

  mensajeCofirmacionEliminado() {
    this._snackBar.open('El usuario se eliminó con éxito.', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'success'
    })
  }

}
