import { Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { CzaspracyComponent } from '../czaspracy/czaspracy.component';


import { CzaspracyService } from '../services/czaspracy.service';



@Component({
  selector: 'app-slowniki',
  templateUrl: './slowniki.component.html',
  styleUrls: ['./slowniki.component.css']
})
export class SlownikiComponent implements OnInit {
  displayedColumns: string[] = ['oddzial', 'typ', 'kosztgodziny', 'akcje'];

  slowniki: any;
  nazwa: any;
  edycjaId: any;
  
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<SlownikiComponent>, private czas:CzaspracyService) { }

  ngOnInit(): void {

    this.pobierzSlowniki();
    this.edycjaId = '';

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.slowniki.filter = filterValue.trim().toLowerCase();
  }

  pobierzSlowniki() {
      this.czas.getKosztCzasPracy()
        .subscribe(response => {
            this.slowniki = response;
            this.slowniki = new MatTableDataSource(this.slowniki);

        });
  }


  closeModal() {
    this.dialogRef.close();
  }

  dodajkoszt(idOddzialu: any, idPracownika: any, kosztgodziny: any){
    if(!kosztgodziny){
      kosztgodziny = 0;
    }
    let koszt: any;
    koszt = prompt("Podaj koszt pracy 1h", kosztgodziny.toString());

    if(koszt){
      this.czas.saveKosztyPracownicy(idOddzialu, idPracownika, koszt)
      .subscribe(response => {
        this.pobierzSlowniki();
  
      });
    }

  }


  

}

