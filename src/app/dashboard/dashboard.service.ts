import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseurl = 'https://bootcamp-dio-sant.herokuapp.com/bootcamp'

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseurl}/stock`).toPromise(); //INCIIALMENTE É UM OBSERVABLE, POR ISSO O TOPROMISE()
  }



}
