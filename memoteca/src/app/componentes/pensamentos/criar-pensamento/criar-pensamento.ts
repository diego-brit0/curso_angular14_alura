import { Component } from '@angular/core';
import { zipAll } from 'rxjs';

@Component({
  selector: 'app-criar-pensamento',
  imports: [],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css'
})
export class CriarPensamento {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  criarPensamento() {
    alert("Novo pensamento criado");
  }

  cancelar() {
    alert("Acao cancelada");
  }

}
