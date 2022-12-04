import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { UtilModule } from 'src/app/util/util.module';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {DialogModule, Dialog} from 'primeng/dialog'
import { InputTextModule } from 'primeng/inputtext';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    CadastroComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    UtilModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
  ],
  exports: [
    CadastroComponent,
  ]
})
export class CadastroModule { }
