import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlownikiService {
  private urlget = 'http://192.168.0.4/wycenyApi/slowniki.php';
  private urladd = 'http://192.168.0.4/wycenyApi/slownikAdd.php';
  private urldel = 'http://192.168.0.4/wycenyApi/slownikDel.php';
  private urledit = 'http://192.168.0.4/wycenyApi/slownikEdit.php';

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
