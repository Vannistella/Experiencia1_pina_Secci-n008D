import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  usuario={
    nombre: '',
    email:'',
    edad:'',
    password:'',
    jornada:''
  }

  constructor(private navCtrl: NavController, private router: Router,
              private menuController: MenuController) {}

  MostrarMenu(){
    this.menuController.open('first');
  }

  goToLogin() {
    // Utiliza el NavController para navegar a la página de inicio de sesión
    this.navCtrl.navigateForward('/inputs');
  }
  
  ngOnInit() {
  }

}
