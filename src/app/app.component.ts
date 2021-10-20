import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


// Periodine lentele
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


// Telefonai

export interface PhoneShop {
  name: string;
  position: number;
  price: number;
  descriprion: string;  
}

const PHONE_DATA: PhoneShop[] = [
  {position: 1, name: 'Samsung', price: 50,  descriprion: 'Camera 4'},
  {position: 2, name: 'Nokia', price: 100,  descriprion: 'Camera 5'},
  {position: 3, name: 'ZTE', price: 150,  descriprion: 'Camera 6'},
  {position: 4, name: 'Lenovo', price: 200,  descriprion: 'Camera 7'},
  {position: 5, name: 'NoName', price: 300,  descriprion: 'Camera 10'},  
];



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'bit-app';

  // Data Source yra duomenu masyvas, kuri perduosime i mat-table komponenta
  dataSource = ELEMENT_DATA;

  dataSource2 = new MatTableDataSource(PHONE_DATA);

 
//utyutyu

  // DisplayedColumns - stulpeliai kuriuos atvaizduosime lenteleje
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  displayedColumns2: string[] = ['position', 'name', 'price', 'descriprion'];

 @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource2.sort = this.sort;}

}


