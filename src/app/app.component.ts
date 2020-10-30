import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

import { SlownikiComponent } from './slowniki/slowniki.component'; 
import { LogowanieComponent } from './logowanie/logowanie.component'; 
import { KosztyComponent } from './koszty/koszty.component'; 

import { ProceduryService } from './services/procedury.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns: string[] = ['id', 'kod', 'nazwa', 'akcje'];
  title = 'KosztProc';
  pokazSlowniki: any;
  oddzial: any;
  procedury: any;
  idOddzialu: any;

  constructor(public matDialog: MatDialog, private proc:ProceduryService) {
    this.start();
  }

  start() {
    this.oddzial = '';
    this.idOddzialu = '';
  }

  pobierzProcedury() {
    this.proc.getProcedury()
      .subscribe(response => {
          this.procedury = response;
          this.procedury = new MatTableDataSource(this.procedury);

      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.procedury.filter = filterValue.trim().toLowerCase();
  }

  koszty(idProcedury: any, nazwaProcedury: any){
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "80%";
    dialogConfig.width = "70%";
    dialogConfig.data = { idProcedury: idProcedury, nazwaProcedury: nazwaProcedury, idOddzialu: this.idOddzialu };
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(KosztyComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.oddzial = "Endoskopia";
      this.pobierzProcedury();
      
    });
  }

  logowanie() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.width = "30%";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(LogowanieComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.oddzial = "Endoskopia";
      this.idOddzialu = 1;
      this.pobierzProcedury();
      
    });
  }

  slowniki(){
      const dialogConfig = new MatDialogConfig();
      // The user can't close the dialog by clicking outside its body
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "70%";
      dialogConfig.width = "60%";
      // https://material.angular.io/components/dialog/overview
      const modalDialog = this.matDialog.open(SlownikiComponent, dialogConfig);
    
  }



}
