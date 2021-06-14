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
  private wyk = 'http://192.168.0.4/wycenyApi/wykonanie.php';
  private odd = 'http://192.168.0.4/wycenyApi/oddzialy.php';
  private wyka = 'http://192.168.0.4/wycenyApi/wykonania.php';
  private wykd = 'http://192.168.0.4/wycenyApi/wykonanieDel.php';

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

  addWykonanie(idoddzialuwykonujacego: any, iddlaoddzialu: any, idprocedury: any, ilosc: any, data: any){
    const postData = new FormData();
    postData.append('idoddzialuwykonujacego', idoddzialuwykonujacego);
    postData.append('iddlaoddzialu', iddlaoddzialu);
    postData.append('idprocedury', idprocedury);
    postData.append('ilosc', ilosc);
    postData.append('data', data);
    return this.httpClient.post(this.wyk, postData);
  }

  getOddzialy(){
    const postData = new FormData();
    postData.append('wybor', '1');
    postData.append('idOddzialu', '1');
    return this.httpClient.post(this.odd, postData);

  }

  getWykonania(id: any){
    const postData = new FormData();
    postData.append('idOddzialu', id);
    return this.httpClient.post(this.wyka, postData);

  }

  delWykonanie(id: any){
    const postData = new FormData();
    postData.append('id', id);
    return this.httpClient.post(this.wykd, postData);

  }
}
