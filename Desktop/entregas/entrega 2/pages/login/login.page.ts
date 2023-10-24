import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userdata: any;

  loginForm: FormGroup;


  usuario = {
    id: 0,
    usuario: "",
    contrasena: "",
    correo: "",
    apellido: "",
    isactive: false

  }
  
  login() {
    if (this.loginForm.valid) {
      this.authservice.GetUserById(this.loginForm.value.usuario).subscribe(resp => {
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length > 0) {
          this.usuario = {
            id: this.userdata[0].id,
            usuario: this.userdata[0].usuario,
            contrasena: this.userdata[0].contrasena,
            correo: this.userdata[0].correo,
            apellido: this.userdata[0].apellido,
            isactive: this.userdata[0].isactive
          }
          if (this.usuario.contrasena === this.loginForm.value.contrasena) {
            if (this.usuario.isactive) {
              sessionStorage.setItem('usuario', this.usuario.usuario);
              sessionStorage.setItem('contrasena', this.usuario.contrasena);
              sessionStorage.setItem('ingresado', 'true');
              this.showToast('Sesión iniciada');
              this.router.navigateByUrl("/hub")
            }
            else {
              this.UserInactivo();
            }
          }
          else {
            this.Error()
          }
        }
        else {
          this.NoExiste();
          this.loginForm.reset();
        }
      })
    }
  }

  constructor(private authservice: AuthService,
    private router: Router,
    private alertcontroller: AlertController,
    private toastcontroller: ToastController,
    private fbuilder: FormBuilder) {
    this.loginForm = this.fbuilder.group({
      'usuario': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'contrasena': new FormControl("", [Validators.required, Validators.minLength(3)])
    })
  }

  ngOnInit() {
  }

  async showToast(msg: any) {
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 3000
    })
    toast.present();
  }

  async UserInactivo() {
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: 'Usuario Inactivo',
      buttons: ['Ok']
    })
    alerta.present();
    return;
  }

  async Error() {
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: 'Credenciales Incorrectas',
      buttons: ['Ok']
    });
    alerta.present();
    return;
  }

  async NoExiste() {
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: 'Usuario no registrado',
      buttons: ['Ok']
    })
    alerta.present();
    return;
  }
}
