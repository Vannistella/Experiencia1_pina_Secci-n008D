import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
import { ApiCrudService } from '../../servicio/api-crud.service';
import { LoadingController } from '@ionic/angular';
import { Inoticias } from '../interfaces/interfaces';
import { __await } from 'tslib';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.page.html',
  styleUrls: ['./hub.page.scss'],
})
export class HubPage implements OnInit {
  noticias:Inoticias[]=[];
  handlerMessage='';
  roleMessage='';
  constructor(private menuController: MenuController, 
              private alertController: AlertController, 
              private router: Router,
              private loadingCtrl : LoadingController,
              private noticiasService: ApiCrudService) { }


  ionViewWillEnter(){
    this.loadNoticia();
  }
  ngOnInit() {
  }

  MostrarMenu() {
    this.menuController.open('first');
  }
  async loadNoticia(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.noticiasService.listarNoticias().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.noticias=JSON.parse(listString)
          event?.target.complete();
          console.log(this.noticias);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    ) 
  }

  logout() {
    // Elimina los datos de sesión almacenados
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('ingresado');

    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  async mensaje(){
    if(localStorage.getItem('ingresado')=='true')
    {
      const alert = await this.alertController.create({
        header: 'Bienvenido a TeLLevoApp ' + localStorage.getItem('nombre'),
        buttons: [
          {
            text: 'Gracias',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'disfrute nuestro servicio';
            },
          },
        ],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }
  }


}