import { CadastroService } from './../../../../services/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { GatoDTO } from 'src/app/models/gato.dto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cols: any[];
  id: string;
  nome: string;
  raca: string;
  peso: string;
  data_nascimento: string;
  listaGatos: Array<GatoDTO> = [];

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.selectGatos();

    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'raca', header: 'Raça' },
      { field: 'peso', header: 'Peso' },
      { field: 'data_nascimento', header: 'Data de nascimento' },
    ];
  }

  selectGatos() {
    this.cadastroService.select().subscribe((resposta) => {
      this.listaGatos = resposta;
    });
  }

  insertGato(gato: GatoDTO) {
    this.cadastroService.insert(gato).subscribe((resposta) => {
      alert('Gato cadastrado com sucesso');
      this.selectGatos();
    });
  }

  updateGato(gato: GatoDTO) {
    this.cadastroService.update(gato).subscribe((resposta) => {
      alert('Gato atualizado com sucesso');
      this.selectGatos();
    });
  }

  deleteGato(id: number) {
    this.cadastroService.delete(id).subscribe(() => {
      alert('Gato deletado com sucesso');
      this.selectGatos();
    });
  }
}
