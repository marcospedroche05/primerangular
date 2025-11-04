import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector: "hooks-angular",
    standalone: false,
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit {

    constructor() {
        console.log("Constructor: Primer método de inicio de Component")
    }

    ngOnInit(): void {
        console.log("Soy On Init");
    }

    ngDocheck(): void {
        console.log("NgCheck cambiando algo en el render!!!")
    }
}