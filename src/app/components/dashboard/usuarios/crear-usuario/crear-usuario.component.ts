import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  form: FormGroup;

  sexo: string[] = ['Masculino', 'Femenino'];

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  crearUsuario() {

    const usuario: Usuario = {usuario: this.form.value.usuario, nombre: this.form.value.nombre, apellido: this.form.value.apellido, sexo: this.form.value.sexo};
    this._usuarioService.crearUsuario(usuario);

    this.mensajeConfirmacion();
    this.router.navigate(['/dashboard/usuarios']);
  }

  mensajeConfirmacion() {
    this._snackBar.open('Usuario registrado con éxito.', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'success'
    })
  }

}
