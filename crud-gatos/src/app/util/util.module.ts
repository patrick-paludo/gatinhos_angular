import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class UtilModule { }
