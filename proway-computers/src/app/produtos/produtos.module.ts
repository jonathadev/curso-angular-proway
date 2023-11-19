import { NgModule } from '@angular/core';


import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';


import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [

    ProdutosRoutingModule,
   // BrowserModule,
    CommonModule,
    FormsModule
  ]
})
export class ProdutosModule { }
