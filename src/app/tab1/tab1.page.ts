import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public n1: number;
  public n2: number;
  public r: number;




  constructor() {}


    public soma() {
  
      let r = this.n1 + this.n2; 
  
      this.r = r;
    }

    public subtracao() {
  
      let r = this.n1 - this.n2; 
  
      this.r = r;
    }

    public multiplicacao() {
  
      let r = this.n1 * this.n2; 
  
      this.r = r;
    }

    public divisao() {
  
      let r = this.n1 / this.n2; 
  
      this.r = r;
    }

    public limpar() {
      this.n1 = null;
      this.n2 = null;
      this.r = null;

  
    }

  

}
