import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasListComponent, PersonasViewComponent, PersonasEditComponent, PersonasAddComponent } from './personas';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { AuthGuard } from './security';
import { BlogListComponent, BlogAddComponent, BlogEditComponent, BlogViewComponent } from './blog';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'inicio', component: HomeComponent},
  { path: 'demos', component: DemosComponent},
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent},
  { path: 'personas', component: PersonasListComponent},
  { path: 'personas/add', component: PersonasAddComponent, canActivate: [AuthGuard]},
  { path: 'personas/:id/edit', component: PersonasEditComponent},
  { path: 'personas/:id', component: PersonasViewComponent},
  { path: 'personas/:id/:kk', component: PersonasViewComponent},
  { path: 'pepito/grillo', redirectTo: '/personas/2'},
  { path: 'blog', children: [
    { path: '', component: BlogListComponent},
    { path: 'add', component: BlogAddComponent},
    { path: ':id/edit', component: BlogEditComponent},
    { path: ':id', component: BlogViewComponent},
    { path: ':id/:kk', component: BlogViewComponent},
  ]},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: '404.html', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
