import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { ProceduryService } from '../services/procedury.service';

export interface DialogData {
  procedury: any;
  idOddzialu: any;
}

@Component({
  selector: 'app-wykonania',
  templateUrl: './wykonania.component.html',
  styleUrls: ['./wykonania.component.css']
})
export class WykonaniaComponent implements OnInit {

  oddzialy: any = [
                      { id: 1, nazwa: "OiT"},
                      { id: 2, nazwa: "Geriatria"},
                      { id: 3, nazwa: "Planowe"},
                  ];
  
  wybranyOddzial: any;
  wybranyOddzialid: any;
  displayedColumns: string[] = ['id', 'kod', 'nazwa', 'akcje'];
  procedury: any;
  filterValue: any;
  wykonania: any;

  constructor(public dialogRef: MatDialogRef<WykonaniaComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private proc:ProceduryService) { }

  ngOnInit(): void {
    console.log(this.data.idOddzialu);
    console.log(this.data.procedury);
    this.wybranyOddzial = "nie bybrano";
    this.wybranyOddzialid = 0;
    this.filterValue = '';
    this.procedury = this.data.procedury;
    this.procedury = new MatTableDataSource(this.procedury);
    this.procedury.filter = this.filterValue.trim().toLowerCase();
    this.proc.getOddzialy()
      .subscribe(response => {
        console.log('wyslano');
        this.oddzialy = response;
      });
      this.getWykonania();
  }

  close(): void {
    this.dialogRef.close();
  }

  wybrodd(id:any, nazwa: any){
    this.wybranyOddzialid = id;
    this.wybranyOddzial = nazwa;
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.procedury.filter = this.filterValue.trim().toLowerCase();
  }

  getWykonania(){
    this.proc.getWykonania(this.data.idOddzialu)
      .subscribe(response => {
        console.log('wyslano');
        this.wykonania = response;
      });
  }
  
  addProc(id: any){
    if(this.wybranyOddzialid > 0){
      let ilosc: any;
      ilosc = prompt("Podaj ilość wykonań");
      if(ilosc){
        console.log(ilosc);
        console.log(id);
        this.proc.addWykonanie(this.data.idOddzialu, this.wybranyOddzialid, id, ilosc, "2021-03-01")
        .subscribe(response => {
          console.log('wyslano');
          this.getWykonania();
        });
      }

    }
    else {
      alert("Nie wybrano Oddziału");
    }

   
    
  }

  delWyk(id: any){
    
      console.log(id);
      this.proc.delWykonanie(id)
      .subscribe(response => {
        console.log('wyslano');
        this.getWykonania();
      });
    
    
  }

}
