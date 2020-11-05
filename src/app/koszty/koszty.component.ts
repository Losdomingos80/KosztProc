import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MagazynComponent } from '../magazyn/magazyn.component'; 
import {MatTableDataSource} from '@angular/material/table';

import { KosztyService } from '../services/koszty.service'; 


export interface DialogData {
  idProcedury: any;
  kodProcedury: any;
  nazwaProcedury: any;
  idOddzialu: any;
  
}

@Component({
  selector: 'app-koszty',
  templateUrl: './koszty.component.html',
  styleUrls: ['./koszty.component.css']
})
export class KosztyComponent implements OnInit {
  
  displayedColumns: string[] = ['identyfikator', 'nazwa', 'jednostkaMiary', 'iloscwJednostce', 'iloscJednostkowa','akcje'];
  procedura: any;
  idprocedury: any;
  pokKoszty: any;

  constructor(private koszty: KosztyService,public dialog: MatDialog, public dialogRef: MatDialogRef<KosztyComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data);
    this.pobierzKoszty();
  }

  delKoszt(idPozycji: any){

    if (confirm("Czy napewno usunąć tą pozycję?")) {
      this.koszty.delKoszty(idPozycji)
      .subscribe(response => {
        this.pobierzKoszty();
  
      });
      } else {
      
    } 
   
  }

  editKoszt(idPozycji: any, wartosc: any) {
    console.log(wartosc);
    let ilosc: any;
    ilosc = prompt("Podaj nową ilość", wartosc.toString());

    if(ilosc){
      this.koszty.editKoszty(idPozycji, ilosc)
      .subscribe(response => {
        this.pobierzKoszty();
  
      });
    }

  }


  pobierzKoszty(){
    this.koszty.getKoszty(this.data.idProcedury, this.data.idOddzialu)
    .subscribe(response => {
      this.pokKoszty = response;
      console.log(this.pokKoszty);
      this.pokKoszty = new MatTableDataSource(this.pokKoszty);

  });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pokKoszty.filter = filterValue.trim().toLowerCase();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addKoszt(){
    const dialogRef = this.dialog.open(MagazynComponent, {
      data: this.data,
      height: '80%',
      width: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.pobierzKoszty();
    });
  }

}
