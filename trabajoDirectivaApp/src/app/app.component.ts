import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  nombre:string = "";
  apellido:string=""
  mensaje = '';
  cargo:string="";
  registrado = false;
  entradas ;


  constructor() {
    this.entradas=[
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace mñas de 20 años"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"JavaScript cada vez mas funcional"},
      {titulo:"¿Dónde quedó Pascal?"},
    ]
  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario registrado correctamente"
  }
}
