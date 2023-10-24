import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/interfaces';
import { ApiCrudService } from '../../servicio/api-crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newUser: IUser = {
    nombre: "",
    apellido: "",
    usuario: "",
    correo:"",
    contrasena: "",
    isactive: true
  }
  constructor(private apiCrud: ApiCrudService,
              private router: Router) { }

  ngOnInit() {
  }

  async MostrarMensaje() {

  }

  
  Registrar(){
    this.apiCrud.Registrar(this.newUser).subscribe();
  
  }
  

}
