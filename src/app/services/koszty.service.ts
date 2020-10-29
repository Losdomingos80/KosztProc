import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KosztyService {

  private urlget = 'http://localhost/wkpm/KosztProcApi/koszty.php';


  constructor(private httpClient: HttpClient) { }


  getKoszty(idProcedury: any, idOddzialu: any){
    const postData = new FormData();
    postData.append('idProcedury', idProcedury);
    postData.append('idOddzialu', idOddzialu);


    return this.httpClient.post(this.urlget, postData);

  }

}
