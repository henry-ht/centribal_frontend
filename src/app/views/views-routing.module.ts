import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes:Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: 'hero/:id',
    component: HeroComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule { }
