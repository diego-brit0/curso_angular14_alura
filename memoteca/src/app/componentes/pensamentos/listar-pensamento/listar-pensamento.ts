import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pensamento } from "../pensamento/pensamento";
import { CommonModule } from '@angular/common';
import { pensamentoInter } from '../pensamentoInter';
import { PensamentoService } from '../pensamento-service';


@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, Pensamento, CommonModule],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css'
})
export class ListarPensamento implements OnInit {

  listaPensamentos: pensamentoInter[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentoResponse) => {
      this.listaPensamentos = listaPensamentoResponse;
    });
  }

}
