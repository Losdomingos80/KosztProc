import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MagazynService } from '../services/magazyn.service';

export interface DialogData {
  idProcedury: any;
  kodProcedury: any;
  nazwaProcedury: any;
  idOddzialu: any;
}

@Component({
  selector: 'app-magazyn',
  templateUrl: './magazyn.component.html',
  styleUrls: ['./magazyn.component.css']
})
export class MagazynComponent implements OnInit {

  displayedColumns: string[] = ['identyfikator', 'nazwa', 'cenaBrutto', 'jednostkaMiary', 'iloscwJednostce', 'akcje'];
  magazyn: any;
  ilosc: any;
  tabelka: any;
  filterValue: any;
  

  constructor(private mag:MagazynService, public dialogRef: MatDialogRef<MagazynComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.magazyn = '';
    this.ilosc = '';
    this.tabelka = true;
    this.pobierzMagazyn();
    console.log(this.data);
    
  }

  spiner(){
    this.tabelka = false;
  }

  tabela(){
    this.tabelka = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onKey(event: any) { // without type info
    this.ilosc = event.target.value;
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.magazyn.filter = this.filterValue.trim().toLowerCase();
  }

  pobierzMagazyn() {
    this.spiner();
    this.mag.getMagazyn(this.data.idProcedury, this.data.idOddzialu)
      .subscribe(response => {
          this.magazyn = response;
          this.magazyn = new MatTableDataSource(this.magazyn);
          this.filterValue = '';
          this.tabela();
          this.magazyn.filter = this.filterValue.trim().toLowerCase();
      });
  }

  zapiszKoszt(idMaterialu: any) {
    this.ilosc = '';
    this.ilosc = prompt("Podaj ilość", "");

    if(this.ilosc){

      this.mag.addMagazyn(this.data.idProcedury, this.data.idOddzialu, idMaterialu, this.ilosc)
      .subscribe(response => {
        this.ilosc = '';
        this.dialogRef.close();

      });

    }
    else {
      alert("Wpisano błędną ilość! Wartość nie może być pusta!")
    }
 
    
  }

}
