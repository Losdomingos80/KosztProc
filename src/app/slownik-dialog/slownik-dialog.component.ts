import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    nazwa: any;
}

@Component({
  selector: 'app-slownik-dialog',
  templateUrl: './slownik-dialog.component.html',
  styleUrls: ['./slownik-dialog.component.css']
})
export class SlownikDialogComponent implements OnInit {

  nazwa: any;

  constructor(public dialogRef: MatDialogRef<SlownikDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.nazwa = '';
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close(this.nazwa);
 }

  onKey(event: any) { // without type info
    this.nazwa = event.target.value;
  }


}
