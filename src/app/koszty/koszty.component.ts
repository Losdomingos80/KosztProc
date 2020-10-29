import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MagazynComponent } from '../magazyn/magazyn.component'; 

export interface DialogData {
  id: any;
  nazwa: any;
}

@Component({
  selector: 'app-koszty',
  templateUrl: './koszty.component.html',
  styleUrls: ['./koszty.component.css']
})
export class KosztyComponent implements OnInit {
  procedura: any;
  idprocedury: any;
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<KosztyComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.procedura = this.data.nazwa;
    this.idprocedury = this.data.id;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addKoszt(){
    const dialogRef = this.dialog.open(MagazynComponent, {
      height: '80%',
      width: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
  
    });
  }

}
