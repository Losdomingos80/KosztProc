import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CzaspracyService {

  private urlget = 'http://192.168.0.4/wycenyApi/czasPracownicy.php';

  constructor(private httpClient: HttpClient) { }

  getPracownicy(){
        return this.httpClient.get(this.urlget);

  }
}
