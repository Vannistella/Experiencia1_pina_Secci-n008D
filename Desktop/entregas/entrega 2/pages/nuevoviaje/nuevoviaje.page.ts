import { Component, OnInit } from '@angular/core';
import { IViaje } from '../interfaces/interfaces';
import { ApiCrudService } from '../../servicio/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevoviaje',
  templateUrl: './nuevoviaje.page.html',
  styleUrls: ['./nuevoviaje.page.scss'],
})
export class NuevoviajePage implements OnInit {

  newViaje: IViaje = {
    inicio: "",
    hora: "",
    marcaVehiculo: "",
    tipoVehiculo: ""
  }
  constructor(private apiCrud: ApiCrudService,
              private router: Router) { }

  ngOnInit() {
  }

  CrearViaje(){
    this.apiCrud.CrearViaje(this.newViaje).subscribe();
    this.router.navigateByUrl("/viajes");
  }
}
