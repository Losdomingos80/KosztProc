import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LogowanieService } from '../services/logowanie.service';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {

  login: any;
  haslo: any;



  constructor(public dialogRef: MatDialogRef<LogowanieComponent>, private log:LogowanieService) { }

  ngOnInit(): void {
    this.login = '';
    this.haslo = '';
    
  }

  onKeyLogin(event: any) { // without type info
    this.login = event.target.value;
    
  }

  onKeyHaslo(event: any) { // without type info
    this.haslo = event.target.value;
    
  }



  onOKClick(){

    if(this.login != '' || this.haslo != ''){
      this.log.getLogowanie(this.login, this.haslo)
      .subscribe(response => {
        
          if(response[0]["status"]=="1"){
            
            this.dialogRef.close(response);
          }
          else{
            alert("Błędny login lub hasło!");
          }
        });
    }

   
          
          
     
    
  }



}
