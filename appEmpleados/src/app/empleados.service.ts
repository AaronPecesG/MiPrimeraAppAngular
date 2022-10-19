import {Empleado} from "./empleado.model";
import {Injectable} from "@angular/core";
import {ServicioEmpleadosService} from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{
  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) {

  }
  empleados:Empleado[]=[
    new Empleado("Aaron","Peces","Presidente",10000),
    new Empleado("Iria","Soler","Directora",7500),
    new Empleado("Julen","Peces","Administrativo",2000),
    new Empleado("Yaiza","Garcia","Jefa Sección",3000),
  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: "+"\n"+empleado.nombre+"\n"+"Salario: "+empleado.salario);
    this.empleados.push(empleado);
  }

}
