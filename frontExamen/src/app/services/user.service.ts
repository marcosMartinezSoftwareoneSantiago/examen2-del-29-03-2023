import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL:string = "https://pruebas.jandrocode.es/api/";
  constructor(private http:HttpClient) { }

  getlist():Observable<User>{
    return this.http.get<User>(this.URL);
    }

}
