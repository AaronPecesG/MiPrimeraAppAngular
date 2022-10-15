import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Especificar cuál es el módulo raíz (Módulo que debe cargar la aplicación)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
