import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router,
              private menuController: MenuController) {}

  
    goToInfo() {
    // Utiliza el NavController para navegar a la página de inicio de sesión
    this.navCtrl.navigateForward('/card');
  }
  
  MostrarMenu(){
    this.menuController.open('first');
  }
  ngOnInit() {
  }

}
