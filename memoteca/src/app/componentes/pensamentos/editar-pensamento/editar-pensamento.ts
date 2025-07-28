import { Component } from '@angular/core';
import { pensamentoInter } from '../pensamentoInter';
import { PensamentoService } from '../pensamento-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css'
})
export class EditarPensamento {

  pensamento: pensamentoInter = {
    id: "",
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(private service:PensamentoService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit():void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamentoResponse) => {
      this.pensamento = pensamentoResponse
    })
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
      this.router.navigate(['/listarPensamento'])
  }
}
