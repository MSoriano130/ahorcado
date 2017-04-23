"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//Componente principal
var core_1 = require("@angular/core");
var ahorcado_1 = require("./ahorcado");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Titulo de prueba en component";
        this.game = new ahorcado_1.Ahorcado('PALABRA');
        this.alphabet = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z',
        ];
    }
    AppComponent.prototype.onKeyUp = function (valor, guess) {
        console.log(valor);
        console.log(guess);
    };
    AppComponent.prototype.makeGuess = function (guess) {
        console.log(guess);
        this.game.setGuess(guess);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: 'app/app.component.html'
        template: "<h1>{{ game.getWord() }}</h1>\n\t\t\n\t\t\n    <input class=\"form-control\" type=\"text\" maxlength=\"1\" #pal (keyup)=\"onKeyUp(pal.value)\" [(ngModel)]=\"guess\">\n  \n\t\t<button *ngFor=\"let letter of alphabet\" (click)=\"makeGuess(letter)\">{{ letter }}</button>\n\n\t\t<br /><br /><br /><br />\n\t\t<br /><br /><br /><br />\n\t\t{{title}}\n\t\t<palabras></palabras>\n\t\t\n\t"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map