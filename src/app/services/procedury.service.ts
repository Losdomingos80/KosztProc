import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProceduryService {

  private urlget = 'http://localhost/wkpm/procedury.php';
  private urladd = 'http://localhost/wkpm/proceduryAdd.php';
  private urldel = 'http://localhost/wkpm/proceduryDel.php';
  private urledit = 'http://localhost/wkpm/proceduryEdit.php';

  constructor(private httpClient: HttpClient) { }

  getProcedury(){

    return this.httpClient.get(this.urlget);

  }

}
