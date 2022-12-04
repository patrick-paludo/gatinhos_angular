import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GatoDTO } from 'src/app/models/gato.dto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() readonly onSalvar = new EventEmitter<GatoDTO>();

  nome: string;
  raca: string;
  peso: string;
  data_nascimento: string;

  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
    this.onSalvar.emit(new GatoDTO(this.nome, this.raca, this.peso, this.data_nascimento))

    this.nome = null;
    this.raca = null;
    this.peso = null;
    this.data_nascimento = null;
  }

}
