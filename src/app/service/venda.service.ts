import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private jsonUrl = 'assets/vendas.json';

  constructor(private http:HttpClient) { }

  listarVendas(): Observable<any>{
    return this.http.get(this.jsonUrl);
  }

}
