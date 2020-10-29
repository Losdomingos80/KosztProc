import { Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { SlownikiService } from '../services/slowniki.service';
import { SlownikDialogComponent} from '../slownik-dialog/slownik-dialog.component'


@Component({
  selector: 'app-slowniki',
  templateUrl: './slowniki.component.html',
  styleUrls: ['./slowniki.component.css']
})
export class SlownikiComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nazwa', 'akcje'];

  slowniki: any;
  nazwa: any;
  edycjaId: any;
  
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<SlownikiComponent>, private slownik:SlownikiService) { }

  ngOnInit(): void {

    this.pobierzSlowniki();
    this.edycjaId = '';

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.slowniki.filter = filterValue.trim().toLowerCase();
  }

  pobierzSlowniki() {
      this.slownik.getSlowniki()
        .subscribe(response => {
            this.slowniki = response;
            this.slowniki = new MatTableDataSource(this.slowniki);

        });
  }

  delSlownik(id: any) {
    this.slownik.delSlowniki(id)
      .subscribe(response => {
      this.pobierzSlowniki();
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SlownikDialogComponent, {
         width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nazwa = result;
      console.log(this.nazwa);
      if(this.nazwa){
        this.slownik.addSlowniki(this.nazwa)
          .subscribe(response => {
            this.pobierzSlowniki();
          });
      }
    });
  }

  openEditDialog(id: any, nazwa: any): void {
    this.edycjaId = id;
    const dialogRef = this.dialog.open(SlownikDialogComponent, {
      data: { nazwa: nazwa },
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.nazwa = result;
      console.log(this.nazwa);
      if(this.nazwa){
        this.slownik.editSlowniki(this.edycjaId, this.nazwa)
          .subscribe(response => {
            this.pobierzSlowniki();
          });
      }
    });
  }

}

