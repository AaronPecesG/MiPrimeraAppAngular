import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría un empleado</p>" --> Si el html es muy sencillo se puede hacer así. (Esto no suele ser una buena práctica)
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color: red;}"] --> Para crear estilos inline. (Esto no suele ser una buena práctica)

  //Para crear template in line: ng g c ejemplo -t
  //Para crear estilos in line: ng g c ejemplo -s
})
export class EmpleadoComponent implements OnInit {

  nombre="Aarón";
  apellido="Peces";
  edad=24;
  empresa="UCLM";

  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }

  llamaEmpresa(value:String){

  }

  habilitacionCuadro=false;
  usuRegistrado=false;
  textoDeRegistro = "No hay nadie registrado"
  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuario se acaba de registrar");
    //this.textoDeRegistro ="El usuario se ha registrado"
    if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
