import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

/*
interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router,
              private menuController: MenuController) {}

  goToLogin() {
    // Utiliza el NavController para navegar a la página de inicio de sesión
    this.navCtrl.navigateForward('/inputs');
  }

  goToRegister() {
    // Utiliza el NavController para navegar a la página de registro
    this.navCtrl.navigateForward('/formulario');
  }

  

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }



}
