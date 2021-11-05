import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunoComponent } from "./aluno/aluno/aluno.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'aluno', component: AlunoComponent },
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  