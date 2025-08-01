import { Component, OnInit } from '@angular/core';
import { pensamentoInter } from '../pensamentoInter';
import { PensamentoService } from '../pensamento-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  imports: [],
  templateUrl: './excluir-pensamento.html',
  styleUrl: './excluir-pensamento.css'
})

export class ExcluirPensamento implements OnInit {

  pensamento: pensamentoInter = {
    id:"",
    conteudo:"",
    autoria:"",
    modelo:""
  }

  constructor(private service:PensamentoService,
              private router:Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(()=>{
        this.router.navigate(['/listarPensamento'])
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }


}
