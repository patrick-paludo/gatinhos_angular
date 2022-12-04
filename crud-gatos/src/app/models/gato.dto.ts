export class GatoDTO {
  id?: string;
  nome: string;
  raca: string;
  peso: string;
  data_nascimento: string;

  constructor(nome: string, raca: string, peso: string, data_nascimento: string){
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
    this.data_nascimento = data_nascimento;
  }
}
