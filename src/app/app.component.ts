import { Component, OnInit } from '@angular/core';
import { Venda } from './model/venda';
import { VendaService } from './service/venda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  jsonVendas: Venda[] = [];
  vendasFiltro: Venda[] = [];

  filtroNome: string = '';
  filtroStatus: string = '';

  valorTotal: number = 0;
  ticketMedio: number = 0;

  constructor(private vendaService: VendaService){}

  ngOnInit() {
    this.vendaService.listarVendas().subscribe(dados =>{
      this.jsonVendas = dados;
      this.vendasFiltro = dados;
      this.atualizarDashboard();
    });
  }

  filtro(){
    this.vendasFiltro = this.vendaService.filtroVendas(
      this.jsonVendas,
      this.filtroNome,
      this.filtroStatus
    );
  }

  atualizarDashboard(){
    const valores = this.vendaService.calcularValor(this.jsonVendas);
    this.valorTotal = valores.valorTotal;
    this.ticketMedio = valores.valorTicketMedio;
  }

}
