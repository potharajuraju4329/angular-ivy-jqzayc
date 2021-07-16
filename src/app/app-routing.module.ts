import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'Raju',
    loadChildren: './details/details.module#DetailsModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule {}
