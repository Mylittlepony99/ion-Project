import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  variavel_lista = [];
  texto: string = "";
  variavel_preco = [];
  preco: number;
  variavel_soma = "";
  soma: number;



  adiciona() {
    if (!(this.texto == "")) {
      this.variavel_lista.push(this.texto);
      this.texto = "";

      this.variavel_preco.push(this.preco);
      this.preco = 0;

    }


    /*
  if (this.texto == "") {

  } else{
    this.variavel_lista.push(this.texto);
    this.texto = "";
  }*/

  }

  //*ngFor = "let elemento_da_lista of minhaLista" no item
  //[(ngModel)]="texto" no input

  remove(indice) {
    this.variavel_lista.splice(indice, 1);

    this.variavel_preco.splice(indice, 1);
  }


}





