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



  tabelka: any;
  
  
  displayedColumns: string[] = ['id', 'kod', 'nazwa', 'akcje'];
  title = 'KosztProc';
  pokazSlowniki: any;
  oddzial: any;
  procedury: any;
  idOddzialu: any;
  wybor: any;
  filterValue: any;

  constructor(public matDialog: MatDialog, private proc:ProceduryService) {
    this.start();
  }

  spiner(){
    this.tabelka = false;
  }

  tabela(){
    this.tabelka = true;
  }

  start() {
    this.oddzial = '';
    this.idOddzialu = '';
    this.wybor = "przypisane";
    this.filterValue = '';
    this.tabelka = true;
    this.logowanie();
  }

  addProc(idProcedury: any){
    this.proc.addPrzypisanie(idProcedury, this.idOddzialu)
    .subscribe(response => {
      this.pobierzProcedury();

    });
  }

  delProc(idProcedury: any){

    if (confirm("Czy napewno usunąć tą pozycję?")) {
      this.proc.delPrzypisanie(idProcedury, this.idOddzialu)
      .subscribe(response => {
        this.pobierzProcedury();
  
      });
      } else {
      
    } 
   
  }

  rodzajPrzypisane(){
      this.wybor = "przypisane";
      this.pobierzProcedury();
  }

  rodzajNiePrzypisane(){
    this.wybor = "nie przypisane";
    this.pobierzProcedury();
}

  pobierzProcedury() {
    this.spiner();
    this.proc.getProcedury(this.wybor, this.idOddzialu)
      .subscribe(response => {
          this.procedury = response;
          this.procedury = new MatTableDataSource(this.procedury);
          this.procedury.filter = this.filterValue.trim().toLowerCase();
          this.tabela();
      });
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.procedury.filter = this.filterValue.trim().toLowerCase();
  }

  koszty(idProcedury: any, nazwaProcedury: any, kodProcedury: any){
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = { idProcedury: idProcedury, kodProcedury: kodProcedury, nazwaProcedury: nazwaProcedury, idOddzialu: this.idOddzialu };
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(KosztyComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
      this.oddzial =result[0]["nazwa"];
      this.idOddzialu = result[0]["idOddzialu"];
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
