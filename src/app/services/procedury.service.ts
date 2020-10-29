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

  getProcedury(){

    return this.httpClient.get(this.urlget);

  }

}
