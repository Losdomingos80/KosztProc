import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

import { CzaspracyService } from '../services/czaspracy.service';

export interface DialogData {
  idProcedury: any;
  kodProcedury: any;
  nazwaProcedury: any;
  idOddzialu: any;
  
}

@Component({
  selector: 'app-czaspracy',
  templateUrl: './czaspracy.component.html',
  styleUrls: ['./czaspracy.component.css']
})
export class CzaspracyComponent implements OnInit {

  displayedColumns: string[] = ['rodzaj', 'akcje'];
  lista: any;
  kosztyPracownicy: any;
  kosztyPracownicyLista: any;

  constructor(public dialogRef: MatDialogRef<CzaspracyComponent>, 
                    @Inject(MAT_DIALOG_DATA) public data: DialogData,
                    public pracownicy: CzaspracyService) { }

  ngOnInit(): void {
    this.lista = false;
    this.pobierzPraconikow();
    this.pobierzKosztyPraconikow();
    
  }

  off() {
    this.lista = false;
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  add() {
    this.lista = true;
  }

  addKoszt(id: any) {
    console.log(id);
    let ilosc: any;
    ilosc = prompt("Podaj czas pracy w minutach");
    console.log(ilosc);
    this.pracownicy.addPracownicy(this.data.idProcedury, this.data.idOddzialu, id, ilosc)
    .subscribe(response => {
      this.lista = false;
      this.pobierzPraconikow();
      this.pobierzKosztyPraconikow();
    });
  }

  pobierzPraconikow() {
    this.pracownicy.getPracownicy(this.data.idProcedury, this.data.idOddzialu)
      .subscribe(response => {
        this.kosztyPracownicy = response;
        console.log(this.kosztyPracownicy);
      });
    }
  
  pobierzKosztyPraconikow() {
      this.pracownicy.getKosztyPracownicy(this.data.idProcedury, this.data.idOddzialu)
        .subscribe(response => {
          this.kosztyPracownicyLista = response;
          console.log(this.kosztyPracownicyLista);
        });
      }


  editKoszt(idPozycji: any, wartosc: any) {
        console.log(wartosc);
        let ilosc: any;
        ilosc = prompt("Podaj nowy czas pracy w minutach", wartosc.toString());
    
        if(ilosc){
          this.pracownicy.editKosztyPracownicy(idPozycji, ilosc)
          .subscribe(response => {
            this.pobierzPraconikow();
            this.pobierzKosztyPraconikow();
      
          });
        }
    
      }

   delKoszt(idPozycji: any){

        if (confirm("Czy napewno usunąć tą pozycję?")) {
          this.pracownicy.delKosztyPracownicy(idPozycji)
          .subscribe(response => {
            this.pobierzPraconikow();
            this.pobierzKosztyPraconikow();
      
          });
          } else {
          
        } 
       
      }


}