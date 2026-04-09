import { Component, OnInit } from '@angular/core';
import { Venda } from './model/venda';
import { VendaService } from './service/venda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jsonVendas: Venda[] = [];

  constructor(private vendaService: VendaService){}

  ngOnInit() {
    this.vendaService.listarVendas().subscribe(dados =>{
      this.jsonVendas = dados;
    });
  }



}
