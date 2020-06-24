import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public calculo = '';
  public r: string;


  constructor() {}

  public adicionarNum(x: string) {
    this.calculo = this.calculo + x;
  }

  public adicionarPonto() {
    this.calculo += ".";
  }

  public adicionarOp(op: string) {
    this.calculo += op;
  }

  public apagarTudo(r: any) {
    this.calculo = '';
    this.r = null;
  }

  public apagarUltimo(x: string) { 
    this.calculo = this.calculo.slice(0, -1);
  }



}

