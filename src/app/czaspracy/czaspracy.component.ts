import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

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

  lista: any;

  constructor(public dialogRef: MatDialogRef<CzaspracyComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.lista = false;
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  add() {
    this.lista = true;
  }
}