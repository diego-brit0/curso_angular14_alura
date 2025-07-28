import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { pensamentoInter } from '../pensamentoInter';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule, RouterLink],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css'
})
export class Pensamento {

  @Input() pensamento:pensamentoInter = {
    id:"",
    conteudo: "",
    autoria: "",
    modelo: "",
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256 ) {
      return 'pensamento-g'
    }else{
      return 'pensamento-p'
    }
  }

}
