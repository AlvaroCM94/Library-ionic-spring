import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  
  public name: string;
  public rol: string;
  public logeado: string;

  constructor(private router: Router){}

  ngOnInit() {
    if(localStorage.getItem("name") != null){
      this.name = localStorage.getItem("name");
      this.rol = localStorage.getItem("rol");
      this.logeado = localStorage.getItem("logeado");

      // console.log("name" + localStorage.getItem("name"));
      // console.log("rol" + localStorage.getItem("rol"));
      // console.log("logeado" + localStorage.getItem("logeado"));
    }
    
  }

  logout(){
    localStorage.setItem("name", null);
    localStorage.setItem("rol", null);
    localStorage.setItem("logeado", "false");

    window.location.assign('/');
  }

}
