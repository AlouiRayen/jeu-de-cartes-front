import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Card } from '../models/Card';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = environment.baseUrl+'cards';

  constructor(private httpClient : HttpClient) { }

  public getRandomCards():Observable<Card[]>{
    return this.httpClient.get<Card[]>(this.baseUrl+'/deal');
  }

  public sortCards(order: Order):Observable<Card[]>{
    return this.httpClient.post<Card[]>(this.baseUrl+'/sort',order);
  }
}
