import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { LibroComponent } from './libro/libro.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LibreriaComponent, LibroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
