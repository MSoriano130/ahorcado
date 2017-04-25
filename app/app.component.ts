//Componente principal
import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter} from '@angular/core';
import { Ahorcado } from './ahorcado'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'my-app',		//Se usa como tag html
	//template: 'app/app.component.html'
	template: `<h1>{{ game.getWord() }}</h1>
		

    <input class="form-control" type="text" maxlength="1" #pal (keyup)="onKeyUp(pal.value)" [(ngModel)]="guess">
  <button type="submit" class="btn btn-default" (click)="makeGuess(guess)">Enviar</button>
	{{guess}}
	{{pal.value}}
	
		<button *ngFor="let letter of alphabet" (click)="makeGuess(letter)">{{ letter }}</button>

		<br /><br /><br /><br />
		<br /><br /><br /><br />
		{{title}}
		<palabras></palabras>
	` 
})


@Injectable()
export class AppComponent {
	title = "Titulo de prueba en component";

	alphabet: Array<string>
  	 game: Ahorcado
	 guess: string = ""

	

	constructor(private http: Http) {
		this.game = new Ahorcado('palabra')
		this.alphabet = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U','V','X','W','Y','Z',
		]
	}


	newPalabra() {
    //this.http.get('https://hangman-service.herokuapp.com/api').map(data => data.json()).toPromise().then(data => this._wordObserver.next(data));
	return this.http.get('http://localhost:3000/').map(response => response.json());
  }

	onKeyUp(valor, guess: string) {
        console.log(valor);
		console.log(guess);
		this.game.setGuess(guess)
    }

	makeGuess(guess: string) {
		console.log(guess)
		this.game.setGuess(guess)
		
		
	}

	/*  guess: string = 'a';

  @Output() keyup : EventEmitter<any> = new EventEmitter();
  @Output() guessMade: EventEmitter<string> = new EventEmitter();

  sendKeyUp() {
    this.keyup.emit(null);
  }

  makeGuess(){
	  this.guessMade.emit(this.guess);
      this.guess = "";
  }
  */


}
