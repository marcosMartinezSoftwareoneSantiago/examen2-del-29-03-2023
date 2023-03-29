import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Personaje } from 'src/app/models/personaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  URL:string = "https://rickandmortyapi.com/api/character";
  constructor(private http:HttpClient) { }

  getlist():Observable<Personaje>{
    let jsonDevuelto:any = this.http.get<any>(this.URL)
    let personajes:[Personaje];
    jsonDevuelto.results.forEach(personaje => {//Este bucle está mal porque es un objeno y no un array
        personajes.push(new Personaje(personaje.id, personaje.name, personaje.status, personaje.gender, personaje.image));
    });
    return jsonDevuelto.results;
    }

}