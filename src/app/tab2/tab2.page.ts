import { Component } from '@angular/core';
// Importação da Biblioteca 'mathjs' para inserir cálculos
import { evaluate } from 'mathjs';
// Importação da Biblioteca 'AlertController' para inserir alerts

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Declaração de variáveis

  // Variável com valor inicial de '' ou seja, vazio
  public calculo = '';
  // Variável declarada como String (Tipar)
  public r: string;

  // Variável com valor inicial de 'false' (Para inserir outro ponto)
  private ponto = false;
  // Variável com o valor dos operadores declarados em um Array
  private op = ['+', '-', '*', '/'];


  constructor(
    // (Necessário) Apelido para o AlertController
    public alertController: AlertController
  ) { }

  // Função para adicionar número
  public adicionarNum(x: string) {
    // Se o resultado for igual a "true" (Se ele tiver algum valor)
    if (this.r) {
      this.apagarTudo();
    }
    // Soma a variável 'calculo' o número passado na função (Insere o número na calculadora)
    this.calculo = this.calculo + x;
  }

  // Função para Inserir o Ponto
  public adicionarPonto() {
    // Se a varíavel "ponto" for igual a "true" (Se ele tiver algum valor)
    if (this.ponto) {
      return;
    }
    // Soma a variável "calculo" o "." (Insere o ponto no calculo)
    this.calculo += '.';
    // Declaração da variável "ponto" com o valor "true" (Proíbe inserir outro ponto)
    this.ponto = true;
  }

  // Função para adicionar uma operação
  public adicionarOp(op: string) {
    // Se o resultado for igual a "true" (Se ele tiver algum valor)
    if (this.r) {
      // Definiu a variável "calculo" o valor da variável "r" transformada
      // de Number para String (Insere o valor do resultado no calculo para continuar)
      this.calculo = this.r.toString();
      // Definiu a variável "r" o valor de "null" (Limpa o Resultado)
      this.r = null;
    }

    // Cria a constante "ultimo" e definiu a ela o valor do último número
    const ultimo = this.calculo.slice(-1);
    // Se a constante ultimo for igual a qualquer operação vai encerrar a função, pois não tem como colocar 2 sinais seguidos...
    if (this.op.indexOf(ultimo) > -1) {
      return;
    }
    // Soma a variável "calculo" com o operador passado na função (Insere operador no calculo)
    this.calculo += op;
    // Definiu a variável "ponto" o valor "false" (Faz possível a inserção de outro ponto)
    this.ponto = false;
  }

  public apagarTudo() {
    // Definiu a variável "calculo o valor de '' (Limpa o calculo)
    this.calculo = '';
    // Definiu a variável "calculo" o valor de "null" (Limpa o resultado)
    this.r = null;
    // Definiu a variável "ponto" o valor "false" (Faz possível a inserção de outro ponto)
    this.ponto = false;
  }

  // Função para apagar o , ela recebe uma string (operador) passada previamente na chamada da função
  public apagarUltimo(x: string) {
    // Cria a constante "ultimo" e definiu a ela o valor do último caractere da varíavel calculo
    const ultimo = this.calculo.slice(-1);
    // Se a constante "ultimo" for igual a '.'
    if (ultimo == '.') {
      // Definiu a variável "ponto" o valor "false" (Faz possível a inserção de outro ponto)
      this.ponto = false;
    }
    // Definiu a variável "calculo" com o valor da variável "calculo" removendo o último caractere (Remove o ultimo caracterer)
    this.calculo = this.calculo.slice(0, -1);
  }

  public calcularResultado() {
    try {
      // Definiu a variável "r" com o valor resultante da função "evaluate" passando o calculo (Mostra o resultado)
      this.r = evaluate(this.calculo);
      // Caso não seja possível, recebe o erro...
    } catch (e) {
      // Definiu a variável "r" o valor '' (Limpa o Resultado)
      this.r = '';
      // Chama a função "presentAlert" passando 2 parâmetros
      this.presentAlert(' Alerta!!! ', ' Cálculo Inválido!!! ');
    }
  }

  // Função para mostrar alert recebendo 2 parâmetros ( title, message)
  async presentAlert(title: string, message: string) {
    // Cria uma constante chamada "alert" que recebe o alertController
    const alert = await this.alertController.create({
      // Título do alerta
      header: title,
      // Mensagem do alerta
      message: message,
      // Declaração dos botões
      buttons: ['OK']
    });

    // Função que mostra o alert ao usuário
    await alert.present();
  }
}

