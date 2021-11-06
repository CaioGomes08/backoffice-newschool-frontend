import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno';
import { environment } from 'src/environments/environment';
import { BackofficeResult } from '../models/backoffice-result';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  public getAlunos() {
    return this.httpClient.get<Aluno[]>(`${environment.newSchoolApi}/api/Aluno`);
  }

  public saveAluno(aluno: any) {
    return this.httpClient.post<BackofficeResult>(`${environment.newSchoolApi}/api/Aluno`, aluno);
  }
}
