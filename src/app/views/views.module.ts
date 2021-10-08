import { ViewsRoutingModule } from './views-routing.module';
import { CoreModule } from './../core/core.module';
import { LayoutsModule } from './../layouts/layouts.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
