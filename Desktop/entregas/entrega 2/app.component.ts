import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {


  opciones: Componente[] = [
    {
      icon: 'home',
      name: 'Inicio',
      redirecTo: '/hub'
    },
    {
      icon: 'person',
      name: 'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon: 'navigate-circle',
      name: 'Viajes',
      redirecTo: '/viajes'
    }
 
  ]

  constructor() { }

}
