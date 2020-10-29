import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MagazynService {

  private urlget = 'http://localhost/wkpm/magazyn.php';
  private urladd = 'http://localhost/wkpm/magazynAdd.php';

  constructor(private httpClient: HttpClient) { }


  getMagazyn(){

    return this.httpClient.get(this.urlget);

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
