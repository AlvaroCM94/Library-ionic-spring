import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  pageSize = 10;

  public showN:boolean = false;
  public showE:boolean = false;
  public showE2:boolean = false;
  public showP:boolean = false;
  public showP2:boolean = false;

  public users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    if(localStorage.getItem('rol') != 'ADMIN'){
      window.location.assign('/');
    }

    this.loadInfo();
  }

  loadInfo() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    })
  }

  createUser(name: string, email: string, rol: string, password: string, e){
    e.preventDefault();

    const newUser: User = {
      id: 0,
      name: name,
      email: email,
      password: password,
      rol: rol
    }

    this.userService.createUser(newUser).subscribe(() => {
      this.loadInfo();
    });
  }

  updateUser(book: User, name: string, email: string, rol: string, password: string, e) {
    e.preventDefault();

    const newUser: User = {
      id: book.id,
      name: name,
      email: email,
      password: password,
      rol: rol
    }

    this.userService.updateUser(newUser.id, newUser).subscribe(() => {
      this.loadInfo();
    });

  }

  deleteUser(id: number) {
    if(confirm("Pulse aceptar para borrar el Usuario") == true){
      this.userService.deleteUser(id).subscribe(() => {
        this.loadInfo();
      })
    }else{

    }
    
  }

}
