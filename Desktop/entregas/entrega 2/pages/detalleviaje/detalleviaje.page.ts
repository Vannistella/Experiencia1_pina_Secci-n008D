import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from '../../servicio/api-crud.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-detalleviaje',
  templateUrl: './detalleviaje.page.html',
  styleUrls: ['./detalleviaje.page.scss'],
})
export class DetalleviajePage implements OnInit {
  
  viaje={
    id:0,
    inicio:"",
    hora:"",
    marcaVehiculo:"",
    tipoVehiculo:""
  }

  MostrarMenu() {
    this.menuController.open('first');
  }
  constructor(private menuController: MenuController,
              private apiCrud: ApiCrudService, 
              private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getviajeById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getviajeById(animalitoID:number){
    this.apiCrud.BuscarViajeId(animalitoID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.viaje={
          id: resp[0].id,
          inicio: resp[0].inicio,
          hora: resp[0].hora,
          marcaVehiculo: resp[0].marcaVehiculo,
          tipoVehiculo: resp[0].tipoVehiculo
        }
      }
    )
  }

}
