import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>Hola mundo</h1>
    <h2>{{titulo}}</h2>
    
    <p>La base es: {{base}}</p>
    
    <button (click)="acumular(-10);"> -10</button>
    <button (click)="acumular(-base);"> -{{base}}</button>
    <button (click)="restar();"> -1</button>
    <span> {{numero}} </span>
    <button (click)="sumar();"> +1</button>
    <button (click)="acumular(+base);"> +{{base}}</button>
    <button (click)="acumular(+10);"> +10</button>
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador APP';
    numero:number = 10;
  
    base: number = 5;
  
    sumar(){
      this.numero += 1;
    }
    restar(){
      this.numero -= 1;
    }
    acumular(valor:number){
      this.numero += valor;
    }
}