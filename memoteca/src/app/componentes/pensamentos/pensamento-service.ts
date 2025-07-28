import { pensamentoInter } from './pensamentoInter';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "http://localhost:3000/pensamentos";

  constructor(private http:HttpClient) {}

  listar(): Observable<pensamentoInter[]> {
    return this.http.get<pensamentoInter[]>(this.API);
  }

  criar(pensamento: pensamentoInter) : Observable<pensamentoInter> {
    return this.http.post<pensamentoInter>(this.API, pensamento);
  }

  editar(pensamento: pensamentoInter) : Observable<pensamentoInter> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<pensamentoInter>(url, pensamento)
  }

  excluir(id:string): Observable<pensamentoInter> {
    const url = `${this.API}/${id}`
    return this.http.delete<pensamentoInter>(url)
  }

  buscarPorId(id: string): Observable<pensamentoInter> {
    const url = `${this.API}/${id}`
    return this.http.get<pensamentoInter>(url)
  }

}
