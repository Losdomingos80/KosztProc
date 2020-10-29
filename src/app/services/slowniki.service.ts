import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlownikiService {
  private urlget = 'http://localhost/wkpm/KosztProcApi/slowniki.php';
  private urladd = 'http://localhost/wkpm/KosztProcApi/slownikAdd.php';
  private urldel = 'http://localhost/wkpm/KosztProcApi/slownikDel.php';
  private urledit = 'http://localhost/wkpm/KosztProcApi/slownikEdit.php';

  constructor(private httpClient: HttpClient) { }

  getSlowniki(){

    return this.httpClient.get(this.urlget);

  }

  addSlowniki(nazwa: any){
    const postData = new FormData();
    postData.append('nazwa', nazwa);

    return this.httpClient.post(this.urladd, postData);

  }

  delSlowniki(id: any){
    const postData = new FormData();
    postData.append('id', id);

    return this.httpClient.post(this.urldel, postData);

  }

  editSlowniki(id: any, nazwa: any){
    const postData = new FormData();
    postData.append('id', id);
    postData.append('nazwa', nazwa);

    return this.httpClient.post(this.urledit, postData);

  }
}
