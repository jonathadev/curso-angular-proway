import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';


//import { Http } from '@angular/http';
//import { LocalStorage } from '../../local-storage';

//import 'localstorage-polyfill'
//global['localStorage'] = localStorage;

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obtemCarrinho() {
    //return JSON.parse(localStorage.getItem("carrinho") || "");
     this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
