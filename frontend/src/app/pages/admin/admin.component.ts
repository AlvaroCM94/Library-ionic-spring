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

}
