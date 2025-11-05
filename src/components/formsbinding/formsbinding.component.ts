import { Component } from "@angular/core";

@Component({
    selector: "formsbinding-component",
    templateUrl: "./formsbinding.component.html",
    standalone: false
})

export class FormsBindingComponent {
    public user: any;
    public mensaje: string;
    constructor(){
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }
    recibirDatos(): void {
        this.mensaje = "Datos recibidos";
        console.log(this.user)
    }
}