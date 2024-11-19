import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../formulario-upgrade/Usuario';

@Injectable({
  providedIn: 'root'
})
export class FormularioUpgradeService {
  // private url = 'http://192.168.1.38:3000/clientes';
 private url = 'https://localhost:7257/swagger/index.html'  ;

  constructor(private http: HttpClient ) {}
  //Obtener Clientes:

  getClientes():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url + "api/Cliente/ObtenerClientes")
    
  }

  //Metodo para añadir un cliente nuevo
  setCliente(cliente:Usuario):Observable<Usuario>{
      return this.http.post<Usuario>(this.url, cliente)
  }
}
