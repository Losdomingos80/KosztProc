import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProceduryService {

  private urlget = 'http://localhost/wkpm/KosztProcApi/procedury.php';
  private urladd = 'http://localhost/wkpm/KosztProcApi/proceduryAdd.php';
  private urldel = 'http://localhost/wkpm/KosztProcApi/proceduryDel.php';
  private urledit = 'http://localhost/wkpm/KosztProcApi/proceduryEdit.php';

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
