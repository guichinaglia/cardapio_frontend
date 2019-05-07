import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './ingredients/register/register.component';
import { ReadComponent } from './ingredients/read/read.component';
import { CreationOptionsComponent } from './order-creation/creation-options/creation-options.component';
import { OrderHeaderComponent } from './orders/order-header/order-header.component';
import { MainPageComponent } from './main-page/main-page.component';


import { 
  MatToolbarModule, 
  MatButtonModule,
  MatSidenavModule, 
  MatIconModule,
  MatListModule, 
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatDialogModule
 } 
from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    RoutingComponents,
    ReadComponent,
    CreationOptionsComponent,
    OrderHeaderComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,  
    BrowserAnimationsModule,    
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

