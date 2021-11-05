import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  public getAlunos() {
    return this.httpClient.get<Aluno[]>(`${environment.newSchoolApi}/api/Aluno`);
  }
}
