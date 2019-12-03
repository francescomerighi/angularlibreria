export class Libro {
  isbn: string;
  titolo: string;
  autore: string;
  annoUscita: number;

  constructor(isbn: string, titolo: string, autore: string, annoUscita: number) {
    this.isbn = isbn;
    this.titolo = titolo;
    this.autore = autore;
    this.annoUscita = annoUscita;
  }

  isNuovaUscita(): boolean {
    return this.annoUscita == new Date().getFullYear();
  }

  getTitoloCompleto() {
    return this.titolo + " - " + this.autore;
  }
}