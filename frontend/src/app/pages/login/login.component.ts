import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  constructor(private userService: UserService){}

  ngOnInit(){}

  login(email: string, passwor: string){
    //Encriptar contraseña
    //buscar por email
    //si existe comprobar la contraseña
    //si esta bien logearse
  }

  createUser(Nombre: string, Email: string, Password: string){
    //Encriptar contraseña
    const newUser: User = {
      id: 0,
      name: Nombre,
      email: Email,
      password: Password,
      rol: "CUSTOMER"
    }

    this. userService.createUser(newUser).subscribe(() => {});
  }

}
