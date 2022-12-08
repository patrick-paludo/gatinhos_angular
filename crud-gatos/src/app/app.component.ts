import { Component } from '@angular/core';
import { GatoDTO } from './models/gato.dto';
import { CadastroService } from './services/cadastro.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { pt_BR, NzI18nService } from 'ng-zorro-antd/i18n';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud-gatos';

  constructor(
    private cadastroService: CadastroService,
    private fb: UntypedFormBuilder,
    private i18n: NzI18nService
  ) {}

  formCadastrar!: UntypedFormGroup;
  formEditar!: UntypedFormGroup;
  date = null;
  isModalCadastrarVisible = false;
  isModalEditarVisible = false;
  listOfData: GatoDTO[] = [];

  ngOnInit(): void {
    this.selectGatos();

    this.formCadastrar = this.fb.group({
      nome: [null, [Validators.required]],
      raca: [null, [Validators.required]],
      peso: [null, [Validators.required]],
      data_nascimento: [null, [Validators.required]],
    });

    this.formEditar = this.fb.group({
      id: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      raca: [null, [Validators.required]],
      peso: [null, [Validators.required]],
      data_nascimento: [null, [Validators.required]],
    });
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  showModal(): void {
    this.isModalCadastrarVisible = true;
  }

  showModalEditar(id: string): void {
    this.cadastroService.selectByID(id).subscribe(async (resposta) => {
      await this.setValueFormEditar(resposta).then(() => {
        this.isModalEditarVisible = true;
      });
    });
  }

  handleCancel(): void {
    this.isModalCadastrarVisible = false;
  }

  handleCancelModalEditar(): void {
    this.isModalEditarVisible = false;
  }

  selectGatos() {
    this.cadastroService.select().subscribe((resposta) => {
      this.listOfData = resposta;
    });
  }

  setValueFormEditar(resposta: any) {
    return new Promise((resolve, reject) => {
      this.formEditar.setValue({
        id: resposta.id,
        nome: resposta.nome,
        raca: resposta.raca,
        peso: resposta.peso,
        data_nascimento: resposta.data_nascimento,
      });

      resolve(true);
    })
  }

  insertGato(gato: GatoDTO) {
    this.cadastroService.insert(gato).subscribe((resposta) => {
      alert('Gato cadastrado com sucesso');
      this.formCadastrar.reset();
      this.selectGatos();
    });
  }

  updateGato(gato: GatoDTO) {
    this.cadastroService.update(gato).subscribe((resposta) => {
      console.log(resposta);
      alert('Gato atualizado com sucesso');
      this.selectGatos();
    });
  }

  deleteGato(id: string) {
    this.cadastroService.delete(id).subscribe(() => {
      alert('Gato deletado com sucesso');
      this.selectGatos();
    });
  }

  submitForm(): void {
    if (this.formCadastrar.valid) {
      this.formCadastrar.value.data_nascimento = formatDate(
        this.formCadastrar.value.data_nascimento,
        'yyyy-MM-dd',
        'pt-BR',
        '-0300'
      );
      this.insertGato(this.formCadastrar.value);
    } else {
      Object.values(this.formCadastrar.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  submitFormModalEditar(): void {
    if (this.formEditar.valid) {
      this.formEditar.value.data_nascimento = formatDate(
        this.formEditar.value.data_nascimento,
        'yyyy-MM-dd',
        'pt-BR',
        '-0300'
      );
      this.updateGato(this.formEditar.value);
    } else {
      Object.values(this.formEditar.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
