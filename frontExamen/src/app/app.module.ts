import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './componnents/user/user.component';
import { RickyMortyComponent } from './componnents/ricky-morty/ricky-morty.component';
import { RouterModule, Routes } from '@angular/router';
import { NavegadorComponent } from './componnents/navegador/navegador.component';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path:"ejercicio1", component:UserComponent},
  {path:"ricky", component:RickyMortyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RickyMortyComponent,
    NavegadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
