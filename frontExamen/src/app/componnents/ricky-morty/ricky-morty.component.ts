import { Component, OnInit } from '@angular/core';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-ricky-morty',
  templateUrl: './ricky-morty.component.html',
})
export class RickyMortyComponent implements OnInit {

  personajes:any = [];
  status:string = "";
  constructor(private personajeService:PersonajeService) {  }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  obtenerPersonajes(){
    this.personajeService.getlist().subscribe(
      res =>{
        this.personajes = res;
      },
      err=> console.error(err)
    )
  }

  vivo(){
    this.status = "Alive";
  }
  muerto(){
    this.status = "Dead";
  }
}
