import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  public name: string;

  constructor() { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    if(localStorage.getItem('rol') != 'CUSTOMER'){
      window.location.assign('/');
    }
  }

}
