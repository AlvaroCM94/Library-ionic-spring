import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  public showN:boolean = false;
  public showE:boolean = false;
  public showE2:boolean = false;
  public showC:boolean = false;

  constructor() { }

  ngOnInit() {}

  mensaje(nombre:string, email:string, consulta:string){

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

    if(consulta == null || consulta == ""){
      this.showC = true;
    }
    
    if(this.showN == false && this.showE == false && this.showE2 == false && this.showC == false){
      alert("Tu consulta ha sido enviada, la respuesta se remitira a al correo proporcionado.\n¡Muchas gracias!");
    }
  }
}
