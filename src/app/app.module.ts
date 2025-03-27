import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTComponent } from './page-t/page-t.component';
import { PageRComponent } from './page-r/page-r.component';
import { PageOComponent } from './page-o/page-o.component';
import { PageEComponent } from './page-e/page-e.component';
import { PageAllComponent } from './page-all/page-all.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderComponent } from './header/header.component';
import { CircleComponent } from './circle/circle.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { GrafRComponent } from './graf-r/graf-r.component';
import { GrafTComponent } from './graf-t/graf-t.component';
import { GrafOComponent } from './graf-o/graf-o.component';
import { AllGrafComponent } from './all-graf/all-graf.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTComponent,
    PageRComponent,
    PageOComponent,
    PageEComponent,
    PageAllComponent,
    MenuComponent,
    LoginComponent,
    LandingComponent,
    HeaderTwoComponent,
    HeaderComponent,
    CircleComponent,
    SuscripcionComponent,
    GrafRComponent,
    GrafTComponent,
    GrafOComponent,
    AllGrafComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Agregado para manejar peticiones HTTP
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()) // Habilita fetch para SSR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
