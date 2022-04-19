import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { SlownikiComponent } from './slowniki/slowniki.component'; 
import { LogowanieComponent } from './logowanie/logowanie.component'; 
import { KosztyComponent } from './koszty/koszty.component'; 
import { CzaspracyComponent } from './czaspracy/czaspracy.component'; 
import { WycenaprocComponent } from './wycenaproc/wycenaproc.component'; 
import { WykonaniaComponent } from './wykonania/wykonania.component';
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
  procwyk: any;

  constructor(public matDialog: MatDialog, private proc:ProceduryService) {
    this.start();
  }

  spiner(){
    this.tabelka = false;
  }

  
  tabela(){
    this.tabelka = true;
    //this.oddzial = false;
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
          this.procwyk = this.procedury;
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
    
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = { idProcedury: idProcedury, kodProcedury: kodProcedury, nazwaProcedury: nazwaProcedury, idOddzialu: this.idOddzialu };
   
    const modalDialog = this.matDialog.open(KosztyComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(result => {
      console.log('okienko zostało zamknięte');
      this.pobierzProcedury();
      
    });
  }

  wycenaprocedur(procedura: any, oddzial: any, nazwa: any, kod: any){
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = { idProcedury: procedura, idOddzialu: oddzial, nazwa: nazwa, kod: kod };
    
    const modalDialog = this.matDialog.open(WycenaprocComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(result => {
      console.log('okienko zostało zamkniete');
      
      
    });
  }

  czaspracy(idProcedury: any, nazwaProcedury: any, kodProcedury: any){
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = { idProcedury: idProcedury, kodProcedury: kodProcedury, nazwaProcedury: nazwaProcedury, idOddzialu: this.idOddzialu };
    
    const modalDialog = this.matDialog.open(CzaspracyComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(result => {
      console.log('okienko zostało zamkniete');
      this.pobierzProcedury();
      
    });
  }

  logowanie() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.width = "30%";
    
    
    const modalDialog = this.matDialog.open(LogowanieComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(result => {
      console.log('okienko zostało zmkniete');
      this.oddzial =result[0]["nazwa"];
      this.idOddzialu = result[0]["idOddzialu"];
      this.pobierzProcedury();
      
    });
  }

  slowniki(){
      const dialogConfig = new MatDialogConfig();
      
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "90%";
      dialogConfig.width = "80%";
      
      const modalDialog = this.matDialog.open(SlownikiComponent, dialogConfig);
    
  }

  wykonania(){
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90%";
    dialogConfig.width = "80%";
    dialogConfig.data = { procedury: this.procwyk, idOddzialu: this.idOddzialu };
    
    const modalDialog = this.matDialog.open(WykonaniaComponent, dialogConfig);

    modalDialog.afterClosed().subscribe(result => {
      console.log('okienko zostało zamkniete');
      this.pobierzProcedury();
      
    });
  }




}
