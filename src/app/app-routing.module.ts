import { CursoFormComponent } from './cursos/curso-form/curso-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'alunos', component: AlunosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/novo', component: CursoFormComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent },
  { path: 'cursos/:id/editar', component: CursoFormComponent },
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
