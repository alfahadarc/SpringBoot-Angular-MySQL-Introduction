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
    //edit url http://localhost:8080/api/books/5
    //post http://localhost:8080/api/books/
  }
  public findAll(): Observable<any> {
    return this.http.get<any>(this.bookUrl);
  }

  public save(book: any) {
    return this.http.post<any>(this.bookUrl, book);
  }

  public edit(id:any, data:any){
    return this.http.put<any>(this.bookUrl+"/"+id, data)
  }

  public remove(id:any){
    return this.http.delete<any>(this.bookUrl+"/"+id)
  }

  public add(data:any){
    return this.http.post(this.bookUrl+"/", data)
  }
}
