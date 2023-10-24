import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpclient: HttpClient,
    private router: Router) { }

  GetAllUsers(): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`)
  }

  GetUserById(codigo: any): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?usuario=${codigo}`)
  }

  IsLogged() {
    return sessionStorage.getItem('usuario') != null;
  }


}


