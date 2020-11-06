import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogowanieService {

  private urlget = 'http://192.168.0.4/wycenyApi/logowanie.php';

  constructor(private httpClient: HttpClient) { }


  getLogowanie(login: any, haslo: any){
    const postData = new FormData();
    postData.append('login', login);
    postData.append('haslo', haslo);
    return this.httpClient.post(this.urlget, postData);

  }


}
