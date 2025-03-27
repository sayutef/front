import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageRComponent } from './page-r/page-r.component';
import { PageTComponent } from './page-t/page-t.component';
import { LandingComponent } from './landing/landing.component';
import { PageOComponent } from './page-o/page-o.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: LandingComponent},
  { path: 'heart', component: PageRComponent },
  { path: 'Temperature', component: PageTComponent },
  { path: 'oxigeno', component: PageOComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
