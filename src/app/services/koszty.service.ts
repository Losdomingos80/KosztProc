import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class KosztyService {

  private urlget = 'http://192.168.0.4/wycenyApi/koszty.php';
  private urledit = 'http://192.168.0.4/wycenyApi/kosztyEdit.php';
  private urldel = 'http://192.168.0.4/wycenyApi/kosztyDel.php';


  constructor(private httpClient: HttpClient) { }


  getKoszty(idProcedury: any, idOddzialu: any){
    const postData = new FormData();
    postData.append('idProcedury', idProcedury);
    postData.append('idOddzialu', idOddzialu);
    return this.httpClient.post(this.urlget, postData);

  }

  editKoszty(id: any, ilosc: any){
    const postData = new FormData();
    postData.append('id', id);
    postData.append('iloscJednostkowa', ilosc);
    return this.httpClient.post(this.urledit, postData);

  }

  delKoszty(id: any){
    const postData = new FormData();
    postData.append('id', id);
    return this.httpClient.post(this.urldel, postData);

  }

}


