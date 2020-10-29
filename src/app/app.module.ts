import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';


import { MatSelectModule} from '@angular/material/select/';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';  
import {MatTableModule} from '@angular/material/table'; 


import { SlownikiComponent as SlownikiComponent } from './slowniki/slowniki.component';
import { SlownikDialogComponent } from './slownik-dialog/slownik-dialog.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { ProceduryComponent } from './procedury/procedury.component';
import { KosztyComponent } from './koszty/koszty.component';
import { MagazynComponent } from './magazyn/magazyn.component'; 


@NgModule({
  declarations: [
    AppComponent,
    SlownikiComponent,
    SlownikDialogComponent,
    LogowanieComponent,
    ProceduryComponent,
    KosztyComponent,
    MagazynComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule

  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
