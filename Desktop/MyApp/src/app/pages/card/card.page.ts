import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(private alertController: AlertController,
              private menuController: MenuController)  { }

  MostrarMenu(){
    this.menuController.open('first');
  }

  async Llevar() {
    const alert = await this.alertController.create({
      header: 'Saludos',
      subHeader: 'Te llevo App',
      message: 'Ahora estas disponible para compartir tu viaje',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async Subir() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      subHeader: 'Mi primera App',
      message: 'Buscando un carsharing para viajar',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
