import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from '../model/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private jsonUrl = 'assets/vendas.json';

  constructor(private http:HttpClient) { }

  listarVendas(): Observable<any>{
    return this.http.get(this.jsonUrl);
  }

  filtroVendas(lista: Venda[], nome: string, status: string): Venda[]{
    return lista.filter(venda => {
      const buscarNome = venda.cliente.toLowerCase().includes(nome.toLowerCase());
      const buscarStatus = status === '' || venda.status === status;
      return buscarNome && buscarStatus;
    });

  }

}
