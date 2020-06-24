import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public calculo = '';
  public r: string;

  private ponto = false;
  private op = ['+', '-', '*', '/'];


  constructor(
    public alertController: AlertController
  ) { }

  public adicionarNum(x: string) {
    if(this.r) {
      this.apagarTudo();
    }
    this.calculo = this.calculo + x;
  }

  public adicionarPonto() {

    if (this.ponto) {
      return;
    }

    this.calculo += ".";
    this.ponto = true;
  }

  public adicionarOp(op: string) {
    if(this.r) {
      this.calculo = this.r.toString();
      this.r = null;
    }

    const ultimo = this.calculo.slice(-1);
    if (this.op.indexOf(ultimo) > -1) {
      return;
    }

    this.calculo += op;
    this.ponto = false;
  }

  public apagarTudo() {
    this.calculo = '';
    this.r = null;
    this.ponto = false;
  }

  public apagarUltimo(x: string) {
    const ultimo = this.calculo.slice(-1);
    if (ultimo == '.') {
      this.ponto = false;
    }

    this.calculo = this.calculo.slice(0, -1);
  }

  public calcularResultado() {
    try {
      this.r = evaluate(this.calculo);
    } catch (e) {
      this.r = '';
      this.presentAlert(' Alerta!!! ', ' Cálculo Inválido!!! ');
    }
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}

