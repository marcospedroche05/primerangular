import { Component } from "@angular/core";

@Component({
    selector: "deportes-component",
    standalone: false,
    templateUrl: "./deportes.component.html"
})

export class DeportesComponent {

    public deportes: Array<string>;

    constructor(){
        this.deportes = ["Futbol", "Baloncesto", "Dardos", "Petanca"];
    }


}