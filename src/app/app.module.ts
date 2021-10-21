import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';

import {MatSortModule} from '@angular/material/sort';
import { ProduktaiComponent } from './produktai/produktai.component';
import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { ApiemusComponent } from './apiemus/apiemus.component';



@NgModule({
  declarations: [
    AppComponent,    
    ProduktaiComponent,
    KontaktaiComponent,
    ApiemusComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
