import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './nav/nav.component';
import { MatToolbarModule } from "@angular/material/toolbar"
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from "@angular/material/table"
import { EmployeeListComponent } from './employee-list/employee-list-component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from "@angular/material/button"
import { FormsModule } from "@angular/forms"
import {MatSnackBarModule} from "@angular/material/snack-bar"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
