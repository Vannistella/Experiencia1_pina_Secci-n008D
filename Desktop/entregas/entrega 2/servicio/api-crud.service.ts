import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../pages/interfaces/interfaces';
import { Users } from '../pages/interfaces/interfaces';
import { Inoticias } from '../pages/interfaces/interfaces';
import { environment } from '../../environments/environment';
import { IViajes } from '../pages/interfaces/interfaces';
import { IViaje } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  Registrar(newUser: IUser): Observable<IUser>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUser);
  }
  listarNoticias():Observable<Inoticias>{
    return this.httpclient.get<Inoticias>(`${environment.apiUrl}/noticias`);
  }
  CrearViaje(newViaje: IViaje): Observable<IViaje>{
    return this.httpclient.post<IViajes>(`${environment.apiUrl}/viajes`, newViaje);
  }
  listarViajes():Observable<IViajes>{
    return this.httpclient.get<IViajes>(`${environment.apiUrl}/viajes`);
  }

  BuscarViajeId(id:number):Observable<IViajes>{
    return this.httpclient.get<IViajes>(`${environment.apiUrl}/viajes/?id=${id}`);
  }
  
  BuscarNoticiaId(id:number):Observable<Inoticias>{
    return this.httpclient.get<Inoticias>(`${environment.apiUrl}/noticias/?id=${id}`);
  }




}
