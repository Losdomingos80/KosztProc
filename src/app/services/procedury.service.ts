import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProceduryService {

  private urlget = 'http://192.168.0.4/wycenyApi/procedury.php';
  private urladd = 'http://192.168.0.4/wycenyApi/proceduryAdd.php';
  private urldel = 'http://192.168.0.4/wycenyApi/proceduryDel.php';
  private urledit = 'http://192.168.0.4/wycenyApi/proceduryEdit.php';

  constructor(private httpClient: HttpClient) { }

  getProcedury(wybor: any, idOddzialu: any){
    const postData = new FormData();
    postData.append('wybor', wybor);
    postData.append('idOddzialu', idOddzialu);
    return this.httpClient.post(this.urlget, postData);

  }

  addPrzypisanie(idProcedury: any, idOddzialu: any){
    const postData = new FormData();
    postData.append('idProcedury', idProcedury);
    postData.append('idOddzialu', idOddzialu);
    return this.httpClient.post(this.urladd, postData);
  }

  delPrzypisanie(idProcedury: any, idOddzialu: any){
    const postData = new FormData();
    postData.append('idProcedury', idProcedury);
    postData.append('idOddzialu', idOddzialu);
    return this.httpClient.post(this.urldel, postData);
  }

}
