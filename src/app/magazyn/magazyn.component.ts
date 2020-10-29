import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MagazynService } from '../services/magazyn.service';

export interface DialogData {
  idProcedury: any;
  idOddzialu: any;
}

@Component({
  selector: 'app-magazyn',
  templateUrl: './magazyn.component.html',
  styleUrls: ['./magazyn.component.css']
})
export class MagazynComponent implements OnInit {

  displayedColumns: string[] = ['identyfikator', 'nazwa', 'cenaBrutto', 'jednostkaMiary', 'iloscwJednostce', 'ilosc', 'akcje'];
  magazyn: any;
  ilosc: any;

  constructor(private mag:MagazynService, public dialogRef: MatDialogRef<MagazynComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.magazyn = '';
    this.ilosc = '';
    this.pobierzMagazyn();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onKey(event: any) { // without type info
    this.ilosc = event.target.value;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.magazyn.filter = filterValue.trim().toLowerCase();
  }

  pobierzMagazyn() {
    this.mag.getMagazyn()
      .subscribe(response => {
          this.magazyn = response;
          this.magazyn = new MatTableDataSource(this.magazyn);

      });
  }

  zapiszKoszt(idMaterialu: any) {
    this.mag.addMagazyn(this.data.idProcedury, this.data.idProcedury, idMaterialu, this.ilosc)
      .subscribe(response => {
        this.ilosc = '';

      });
  }

}
