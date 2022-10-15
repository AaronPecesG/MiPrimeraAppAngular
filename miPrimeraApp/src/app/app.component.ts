import { Component } from '@angular/core';

//Decorador. Para crearlo debemos utilizar @Component.
@Component({
  selector: 'app-root', //Llama app-root
  templateUrl: './app.component.html', //Plantilla que especifica el documento html donde está cargado el componente.
  styleUrls: ['./app.component.css'] //Permite dar formato a este componente.
})
export class AppComponent {
  title = 'miPrimeraApp';

  saludo = "Hola Mundo, esto es una propiedad en app.components.ts"
}
