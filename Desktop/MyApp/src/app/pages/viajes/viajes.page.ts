import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiCrudService } from '../../servicio/api-crud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IViajes } from '../interfaces/interfaces';



@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})



export class ViajesPage implements OnInit {

  viajes:IViajes[]=[];

  constructor(private menuController: MenuController,
              private viajesService: ApiCrudService,
              private loadingCtrl : LoadingController) { }
  
  ionViewWillEnter(){
    this.loadViajes();
  }
  async loadViajes(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.viajesService.listarViajes().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.viajes=JSON.parse(listString)
          event?.target.complete();
          console.log(this.viajes);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    ) 
  }
              
  MostrarMenu() {
    this.menuController.open('first');
  }
  ngOnInit() {
  }

}
