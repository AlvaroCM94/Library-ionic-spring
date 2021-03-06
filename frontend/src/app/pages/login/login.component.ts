import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  public show:boolean = false;
  public showN:boolean = false;
  public showE:boolean = false;
  public showE2:boolean = false;
  public showP:boolean = false;
  public showP2:boolean = false;

  public user : User;
  public userEmail : User;
  public userPassword : User;

  constructor(private userService: UserService, private router: Router, private nativeStorage: NativeStorage){}

  ngOnInit(){

    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("rol"));
    console.log(localStorage.getItem("logeado"));
  }

  login(email: string, password: string){
    //Encriptar contraseña
    //this.userEmail = undefined;
    //this.userPassword = undefined;
    console.log("0");

    this.userService.getUserByEmail(email).subscribe((response) =>{
      this.userEmail = response;
      console.log("1");
      this.userService.getUserByPassword(password).subscribe((response) =>{
        this.userPassword = response;
        console.log("2");
        //console.log(this.userEmail);
        //console.log(this.userPassword);
        this.checkLogin();
      });
    });
    
  }

  checkLogin(){
    if(this.userPassword == null || this.userEmail == null){
      console.log("error en login null");
      this.show = true;
    }
    if(this.userEmail.password == this.userPassword.password){
      console.log("login correcto");
      this.show = false;

      localStorage.setItem("name", this.userEmail.name);
      localStorage.setItem("rol", this.userEmail.rol);
      localStorage.setItem("logeado", "true");

      if(this.userEmail.rol == "CUSTOMER")
        window.location.assign('/User');
      else if(this.userEmail.rol == "ADMIN"){
        window.location.assign('/Admin');
      }else if(this.userEmail.rol == "EMPLOYEE"){
        window.location.assign('/Employee');
      }

      /*this.nativeStorage.setItem('user', {name: this.userEmail.name, rol: this.userEmail.rol, logeado: "true"})
      .then(
        () => console.log('Stored user!'),
        error => console.error('Error storing user', error)
      );*/
      
    }
    //logearse-token
  }

  createUser(e, Nombre: string, Email: string, Password: string){
    //Encriptar contraseña
    e.preventDefault();
    if(this.comprobarCampos(Nombre, Email, Password) == true){
      const newUser: User = {
        id: 0,
        name: Nombre,
        email: Email,
        password: Password,
        rol: "CUSTOMER"
      }
      console.log("user: " + newUser);
      this.userService.createUser(newUser).subscribe(() => {});
    }
    
  }

  comprobarCampos(nombre: string, email: string, password: string){
    if(nombre == null || nombre == ""){
      this.showN = true;
    }
    
    if(email == null || email == ""){
      this.showE = true;
    }

    if(email != null || email != ""){
      if(email.indexOf("@") == -1){
        this.showE2 = true;
      }else if(email.indexOf(".") == -1){
        this.showE2 = true
      }
    }

    if(password == null || password == ""){
      this.showP = true;
    }

    if(password.length < 7){
      this.showP2 = true;
    }
    
    if(this.showN == false && this.showE == false && this.showE2 == false && this.showP == false && this.showP2 == false){
      return true;
    }else{
      return false;
    }
  }

}
