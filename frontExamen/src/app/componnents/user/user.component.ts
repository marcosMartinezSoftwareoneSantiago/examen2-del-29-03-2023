import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  users:any = [];
  
  constructor(private usuarioServicio:UserService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuarioServicio.getlist().subscribe(
      res =>{
        this.users = res;
      },
      err=> console.error(err)
    )
  }

}
