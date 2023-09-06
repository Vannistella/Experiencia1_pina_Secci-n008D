import { Component } from '@angular/core';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'home',
      redirecTo:'/inicio'
    },
    {
      name:'Viaje',
      icon: 'reader',
      redirecTo:'/card'
    },
    {
      name:'Inicio sesion',
      icon: 'Enter',
      redirecTo:'/inputs'
    },
    {
      name:'Registro',
      icon: 'create',
      redirecTo:'/formulario'
    },

  ]




}
