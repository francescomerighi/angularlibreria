import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro/libro.model';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  libreria: Libro[];
  corrente: number;

  constructor() { }

  ngOnInit() {
    this.libreria = [];
    this.libreria.push(new Libro('123-12-12345-12-1', 'Il nome della rosa', 'Umberto Eco', 1990));
    this.libreria.push(new Libro('123-12-12345-12-1', 'Robinson Crusoe', 'Daniel Defoe', 1760));
    this.libreria.push(new Libro('123-12-12345-12-1', 'Il codice da Vinci', 'Dan Brown', 2001));
    this.libreria.push(new Libro('123-12-12345-12-1', 'Dialogo sopra la nobiltà', 'Giuseppe Parini', 1783));
    this.libreria.push(new Libro('123-12-12345-12-1', 'Il Candido', 'Francois Voltaire', 1642));
    this.corrente = 0;
  }

  onTitoloClick(indice: number) {
    this.corrente = indice;
  }

  onNuovoClick() {
    this.libreria.push(new Libro('', '', '', null));
    this.corrente = this.libreria.length - 1;
  }

}