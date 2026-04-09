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

  calcularValor(vendas: Venda[]){
    const concluido = vendas.filter(v => {
      const s = v.status.toLowerCase().trim();
      return s === 'concluído';
    });

    const valorTotal = concluido.reduce((acc, curr) => acc + (Number(curr.valor) || 0), 0);
    const valorTicketMedio = concluido.length > 0 ? valorTotal / concluido.length : 0;

    return {valorTotal, valorTicketMedio};
  }

}
