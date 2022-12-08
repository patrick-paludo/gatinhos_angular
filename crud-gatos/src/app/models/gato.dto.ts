export class GatoDTO {
  id?: any;
  nome: string;
  raca: string;
  peso: string;
  data_nascimento: string;

  constructor(id: string, nome: string, raca: string, peso: string, data_nascimento: string){
    this.id = id;
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
    this.data_nascimento = data_nascimento;
  }
}
