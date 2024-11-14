import { Component, inject, signal } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FormularioUpgradeService } from './formulario-upgrade.service';
import { clientes } from './clientes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-upgrade',
  standalone: true,
  imports: [
    FormsModule,MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule,MatButtonModule,MatIconModule, MatDividerModule,CommonModule
  ],
  templateUrl: './formulario-upgrade.component.html',
  styleUrl: './formulario-upgrade.component.css'
})
export class FormularioUpgradeComponent {
  public readonly service = inject(FormularioUpgradeService);
  public readonly usuarios = signal<clientes>({} as clientes)

emailFormsControl = new FormControl('',[Validators.required, Validators.email])
  value = 'Clear me'
  

}
