import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KosztyService } from '../services/koszty.service';
import { CzaspracyService } from '../services/czaspracy.service';
import {MatTableDataSource} from '@angular/material/table';

export interface DialogData {
  idProcedury: any;
  idOddzialu: any;
  nazwa: any;
  kod: any;
}

@Component({
  selector: 'app-wycenaproc',
  templateUrl: './wycenaproc.component.html',
  styleUrls: ['./wycenaproc.component.css']
})
export class WycenaprocComponent implements OnInit {

  kosztymat: any;
  pokKoszty: any;
  kosztyPracownicyLista: any;
  czaspracy: any;
  displayedColumns: string[] = ['identyfikator', 'nazwa', 'jednostkaMiary', 'iloscwJednostce', 'iloscJednostkowa','koszt'];
  displayedColumns1: string[] = ['rodzaj', 'ile', 'koszt'];
  displayedColumns2: string[] = ['ile', 'nazwa'];
  sumMat: any;
  sumPrac: any;
  sumRaz: any;

  constructor( public dialogRef: MatDialogRef<WycenaprocComponent>,
     @Inject(MAT_DIALOG_DATA) public data: DialogData,
     private czas:CzaspracyService,
     private koszty:KosztyService) { }

  ngOnInit(): void {
    this.pobierzKosztyMat();
    
  }

  closeModal() {
    this.dialogRef.close();
  }

  pobierzKosztyMat() {
    this.koszty.getKoszty(this.data.idProcedury, this.data.idOddzialu)
      .subscribe(response => {
          this.kosztymat = response;
          console.log(this.kosztymat);
          this.pokKoszty = new MatTableDataSource(this.kosztymat);
          const sum = this.kosztymat
            .map(item => item.koszt)
            .reduce((prev, curr) => prev + curr, 0);
            this.sumMat = sum;
            this.pobierzKosztPracy();
      });
}

pobierzKosztPracy() {
  this.czas.getKosztyPracownicy(this.data.idProcedury, this.data.idOddzialu)
        .subscribe(response => {
          this.kosztyPracownicyLista = response;
          console.log(this.kosztyPracownicyLista);
          const sum = this.kosztyPracownicyLista
            .map(item => item.koszt)
            .reduce((prev, curr) => prev + curr, 0);
            this.sumPrac = sum;
            this.sumRaz = this.sumMat + this.sumPrac;
        });
}

}
