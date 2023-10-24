

export interface Inoticias {
    id: number;
    nombre: string;
    fecha: string;
    link: string;
}

export interface Inoticia {
    nombre: string;
    fecha: string;
    link: string;
}

export interface Users {
    id: number;
    nombre: string;
    apellido: string;
    usuario: string;
    contrasena: string;
    correo: string;
    isactive: boolean;
}


export interface IUser {
    nombre: string;
    apellido: string;
    usuario: string;
    contrasena: string;
    correo: string;
    isactive: boolean; 
}

export interface IViaje{
    inicio:string;
    hora:string;
    marcaVehiculo:string;
    tipoVehiculo:string;
}

export interface IViajes{
    id:number;
    inicio:string;
    hora:string;
    marcaVehiculo:string;
    tipoVehiculo:string;

}

