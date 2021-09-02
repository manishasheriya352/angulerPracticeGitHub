import { ListComponetComponent } from './list-componet/list-componet.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'home' , component:HomeComponentComponent},
{path:'list',component:ListComponetComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
