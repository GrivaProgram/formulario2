import { Component, inject, OnInit, signal } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {Usuario } from './Usuario';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormularioUpgradeService } from '../services/formulario-upgrade.service';
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-formulario-upgrade',
  standalone: true,
  imports: [
    FormsModule,MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule,MatButtonModule,MatIconModule, MatDividerModule,CommonModule,
  HttpClientModule],
  templateUrl: './formulario-upgrade.component.html',
  styleUrl: './formulario-upgrade.component.css'
})
export class FormularioUpgradeComponent  {
  
public usuario: Usuario[] = [];
public  nuevoUsuario: Usuario  = {
  id_: '',
  name: '',
  surname: '',
  phone: '',
  dni: '',
  email: '',
  profesion: ''
}
  constructor(private usuarioService : FormularioUpgradeService){}

  ngOnInit(): void{
    this.getUsuario();
  }

   getUsuario():void {
    this.usuarioService.getClientes().subscribe(
      data =>{
        this.usuario = data
        console.log(data)
      })
   }
   setClientes(): void {
     if(this.nuevoUsuario.dni && this.nuevoUsuario.email  && this.nuevoUsuario.name && this.nuevoUsuario.phone && this.nuevoUsuario.profesion && this.nuevoUsuario.id_){
      this.usuarioService.setCliente(this.nuevoUsuario).subscribe
      (response => {
        alert('Datos enviados correctamente');
        console.log('Respuesta del Servidor', response)
        this.nuevoUsuario = {
          id_: '',
          name: '',
          surname: '',
          phone: '',
          dni: '',
          email: '',
          profesion: ''
          
        };
      }, error => {
        console.error('Error al enviar datos', error);
        alert('Hubo un error al enviar los datos')
      }
    )
     }else {
      alert('Por favor completa todos los campos obligatorio')
     }
    
    }


   
   emailFormsControl = new FormControl('',[Validators.required, Validators.email])
  value = 'Clear me'
  }
 
  


