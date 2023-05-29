import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private bookUrl: string;

  constructor(private http: HttpClient) { 
    this.bookUrl = 'http://localhost:8080/api/books';
  }
  public findAll(): Observable<any> {
    return this.http.get<any>(this.bookUrl);
  }

  public save(book: any) {
    return this.http.post<any>(this.bookUrl, book);
  }
}
