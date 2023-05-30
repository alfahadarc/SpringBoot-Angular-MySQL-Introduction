import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  
  private shopUrl: string;
  constructor(private http: HttpClient) { 
    this.shopUrl = "http://localhost:8080/api/shops"
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.shopUrl);
  }



  public edit(id:any, data:any){
    return this.http.put<any>(this.shopUrl+"/"+id, data)
  }

  public remove(id:any){
    return this.http.delete<any>(this.shopUrl+"/"+id)
  }

  public add(data:any){
    return this.http.post(this.shopUrl, data)
  }
}
