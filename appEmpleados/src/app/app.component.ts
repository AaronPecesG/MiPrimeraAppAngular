import { Component } from '@angular/core';
import {Empleado} from "./empleado.model";
import {ServicioEmpleadosService} from "./servicio-empleados.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

  constructor(private miServicio:ServicioEmpleadosService) {
  }

  empleados:Empleado[]=[
    new Empleado("Aaron","Peces","Presidente",10000),
    new Empleado("Iria","Soler","Directora",7500),
    new Empleado("Julen","Peces","Administrativo",2000),
    new Empleado("Yaiza","Garcia","Jefa Sección",3000),
  ];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " +miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
