import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from '../../servicio/api-crud.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-detallenoticia',
  templateUrl: './detallenoticia.page.html',
  styleUrls: ['./detallenoticia.page.scss'],
})
export class DetallenoticiaPage implements OnInit {


  noticia ={
    id:0,
    nombre:"",
    fecha:"",
    link:""
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
    this.getNoticiaById(this.getIdFromUrl());
  }
  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }
  getNoticiaById(noticiaID:number){
    this.apiCrud.BuscarNoticiaId(noticiaID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.noticia={
          id: resp[0].id,
          nombre: resp[0].nombre,
          fecha: resp[0].fecha,
          link: resp[0].link
        }
      }
    )
  }

}
