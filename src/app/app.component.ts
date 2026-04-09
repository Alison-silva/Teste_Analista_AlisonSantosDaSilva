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

  constructor(private vendaService: VendaService){}

  ngOnInit() {
    this.vendaService.listarVendas().subscribe(dados =>{
      this.jsonVendas = dados;
      this.vendasFiltro = dados;
    });
  }

  filtro(){
    this.vendasFiltro = this.vendaService.filtroVendas(
      this.jsonVendas,
      this.filtroNome,
      this.filtroStatus
    );
  }



}
