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
    // this.obtenerPersonajes();
    this.obtenerPersonajes();
  }

  obtenerPersonajes(){
    this.personajeService.getResponse().subscribe(data =>{
      this.personajes = data.results;
    })
  }

  vivo(){
    this.status = "Alive";
  }
  muerto(){
    this.status = "Dead";
  }
}
