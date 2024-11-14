import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChildFunction } from '@angular/core';
import { Http2ServerRequest } from 'http2';
import { catchError, retry, throwError } from 'rxjs';
import { clientes } from './clientes';

@Injectable({
  providedIn: 'root'
})
export class FormularioUpgradeService {
      public url = 'http://192.168.1.38:3000/'
      constructor( private http: HttpClient) { }
      setAllUsuarios(){
        let url = this.url + 'http://192.168.1.38:3000/clientes'
        return this.http
        .post<clientes>(url,{})
        .pipe(
          catchError((error) => {
            console.error('Error en la petición HTTP:', error);
            return throwError(() => new Error('Error en la petición HTTP'))
          })
        )
      }
      }
