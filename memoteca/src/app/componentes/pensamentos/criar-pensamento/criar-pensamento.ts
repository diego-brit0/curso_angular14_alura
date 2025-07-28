import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { pensamentoInter } from '../pensamentoInter';
import { PensamentoService } from '../pensamento-service';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, RouterLink],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css'
})
export class CriarPensamento {

  pensamento:pensamentoInter = {
    id: "",
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(private service:PensamentoService,
              private router:Router
  ) {}

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPernsamento"])
    });
  }

  acaoCancelada(){
    alert("Mensagem cancelada com sucesso!");
  }

}
