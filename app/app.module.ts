//Modulo principal
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

//Decorador - funcion que modifica las clases de JS

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})

//Para poder exportar componentes de esta clase

export class AppModule{}