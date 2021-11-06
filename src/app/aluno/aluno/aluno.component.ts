import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  
  aluno: Aluno = new Aluno();

  editMode: boolean = false;

  alunoForm = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    cpf: new FormControl(''),
    telefone: new FormControl('')
  });

  ngOnInit(): void {
    this.getAluno();
  }

  getAluno() {
    this.alunoService.getAlunos()
        .subscribe((result) => {
          this.alunos = result;
        });
  }

  onSubmit() {
    console.log(this.alunoForm.value);
    
    this.alunoService.saveAluno(this.alunoForm.value)
        .subscribe((result) => {
          console.log(result);
          if( result.success == true) {
            this.getAluno();
          }
        });
  }

  editar(aluno: Aluno) {
    this.editMode = true;
    this.aluno.id = aluno.id;
    this.aluno.nome = aluno.nome;
    this.aluno.sobrenome = aluno.sobrenome;
  }

}
