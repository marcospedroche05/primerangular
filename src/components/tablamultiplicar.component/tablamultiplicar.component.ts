import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar-component',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent {
  @ViewChild("cajanumero") cajanumeroRef!: ElementRef
  public numeros: Array<number>;
  public numero: number;
  constructor(){
    this.numero = 0;
    this.numeros = []
  }
  generarTabla(): void {
    this.numero = parseInt(this.cajanumeroRef.nativeElement.value);
    this.numeros = [];
    console.log(this.numero);
    for (let i = 1; i <= 10; i++) {
      var resultado = this.numero * i
      this.numeros.push(resultado);
    }
  }

}
