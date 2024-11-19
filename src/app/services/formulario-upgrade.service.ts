import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../formulario-upgrade/Usuario';

@Injectable({
  providedIn: 'root'
})
export class FormularioUpgradeService {
  private url = 'https://expotec.grupoupgrade.com.pe/api/Cliente';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/ObtenerClientes`);
  }

  setCliente(cliente: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}/AgregarCliente`, cliente);
  }
}

