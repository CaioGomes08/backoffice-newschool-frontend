import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(private alunoService: AlunoService) { }

  alunos: Aluno[] = [];

  ngOnInit(): void {
    this.getAluno();
  }

  getAluno() {
    this.alunoService.getAlunos()
        .subscribe((result) => {
          console.log(result);
          this.alunos = result;
        });
  }

}
