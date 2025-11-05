import { Component } from "@angular/core";

@Component({
    selector: "deportes-component",
    standalone: false,
    templateUrl: "./deportes.component.html"
})

export class DeportesComponent {

    public deportes: Array<string>;
    public numeros: Array<number>;

    constructor(){
        this.deportes = ["Futbol", "Baloncesto", "Dardos", "Petanca"];
        this.numeros = [4,5,6,7,8,9];
    }


}