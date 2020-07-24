import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemComponent } from './component/list-item/list-item.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'items', component: ListItemComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
