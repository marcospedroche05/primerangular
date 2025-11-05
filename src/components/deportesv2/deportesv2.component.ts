import { Component } from "@angular/core";

@Component({
    selector: "deportesv2-component",
    templateUrl: "./deportesv2.component.html",
    styleUrl: "./deportesv2.component.css",
    standalone: false
})

export class Deportesv2Component {
    public deportes: Array<string>;
    public numeros: Array<number>;

    constructor(){
        this.deportes = ["Futbol", "Baloncesto", "Dardos", "Petanca"];
        this.numeros = [4,5,6,7,8,9];
    }
}