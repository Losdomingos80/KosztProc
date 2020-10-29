import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogowanieComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    
    this.dialogRef.close();
  }

}
