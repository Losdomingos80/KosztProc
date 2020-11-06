import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MagazynService {

  private urlget = 'http://192.168.0.4/wycenyApi/magazyn.php';
  private urladd = 'http://192.168.0.4/wycenyApi/magazynAdd.php';

  constructor(private httpClient: HttpClient) { }


  getMagazyn(idProcedury: any, idOddzialu: any){
    const postData = new FormData();
    postData.append('idProcedury', idProcedury);
    postData.append('idOddzialu', idOddzialu);
    return this.httpClient.post(this.urlget, postData);

  }

  addMagazyn(idProcedury: any, idOddzialu: any, idMaterialu: any, iloscJednostkowa: any){
    const postData = new FormData();
    postData.append('idProcedury', idProcedury);
    postData.append('idOddzialu', idOddzialu);
    postData.append('idMaterialu', idMaterialu);
    postData.append('iloscJednostkowa', iloscJednostkowa);

    return this.httpClient.post(this.urladd, postData);

  }

}
