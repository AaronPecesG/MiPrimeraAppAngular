import {Empleado} from "./empleado.model";

export class EmpleadosService{
  empleados:Empleado[]=[
    new Empleado("Aaron","Peces","Presidente",10000),
    new Empleado("Iria","Soler","Directora",7500),
    new Empleado("Julen","Peces","Administrativo",2000),
    new Empleado("Yaiza","Garcia","Jefa Sección",3000),
  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
  }

}
