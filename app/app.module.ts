//Modulo principal
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PalabraComponent } from './palabra.component';

//Decorador - funcion que modifica las clases de JS

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, PalabraComponent ],
	bootstrap: [ AppComponent ]
})

//Para poder exportar componentes de esta clase

export class AppModule{}