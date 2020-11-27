import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CzaspracyService {

  private urlget = 'http://192.168.0.4/wycenyApi/czasPracownicy.php';
  private urladd = 'http://192.168.0.4/wycenyApi/czasPraconicyadd.php';
  private url = 'http://192.168.0.4/wycenyApi/czasKosztyPracownicy.php';
  private urledit = 'http://192.168.0.4/wycenyApi/czasKosztyEdit.php';
  private urldel = 'http://192.168.0.4/wycenyApi/czasKosztyDel.php'

  constructor(private httpClient: HttpClient) { }

  getPracownicy(idProcedury: any, idOddzialu: any){
        const postData = new FormData();
        postData.append('idProcedury', idProcedury);
        postData.append('idOddzialu', idOddzialu);
        return this.httpClient.post(this.urlget, postData);
  }

  addPracownicy(idProcedury: any, idOddzialu: any, idPracownika: any, ilosc: any){
    const postData = new FormData();
    postData.append('idProcedury', idProcedury);
    postData.append('idOddzialu', idOddzialu);
    postData.append('idPracownika', idPracownika);
    postData.append('iloscJednostkowa', ilosc);
    return this.httpClient.post(this.urladd, postData);
  }

  getKosztyPracownicy(idProcedury: any, idOddzialu: any){
    const postData = new FormData();
    postData.append('idProcedury', idProcedury);
    postData.append('idOddzialu', idOddzialu);
    return this.httpClient.post(this.url, postData);
  }

  editKosztyPracownicy(id: any, iloscJednostkowa: any){
    const postData = new FormData();
    postData.append('id', id);
    postData.append('iloscJednostkowa', iloscJednostkowa);
    return this.httpClient.post(this.urledit, postData);
  }

  delKosztyPracownicy(id: any){
    const postData = new FormData();
    postData.append('id', id);
    return this.httpClient.post(this.urldel, postData);
  }

}
                                                                               