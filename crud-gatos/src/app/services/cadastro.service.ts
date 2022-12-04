import { environment } from './../../environments/environment';
import { GatoDTO } from 'src/app/models/gato.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  constructor(private httpClient: HttpClient) { }

  select() {
    return this.httpClient.get<Array<GatoDTO>>(`${environment.apiURL}/gatos`);
  }

  selectByID(id: number) {
    return this.httpClient.get<GatoDTO>(`${environment.apiURL}/gatos/${id}`);
  }

  insert(gato: GatoDTO) {
    return this.httpClient.post(`${environment.apiURL}/gatos`, gato);
  }

  update(gato: GatoDTO) {
    return this.httpClient.put(`${environment.apiURL}/gatos`, gato);
  }

  delete(id: number) {
    return this.httpClient.delete(`${environment.apiURL}/gatos/${id}`);
  }
}
