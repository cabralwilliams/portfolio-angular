import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reloaded } from './components/Reloaded/reloaded.component';
import { NavComponent } from './components/Navigation/nav.component';
import { About } from './components/About/about.component';
import { Portfolio } from './components/Portfolio/portfolio.component';
import { ReloadedFooter } from './components/Footer/footer.component';
import { Resume } from './components/Resume/resume.component';
import { Contact } from './components/Contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    Reloaded,
    NavComponent,
    About,
    Portfolio,
    ReloadedFooter,
    Resume,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, Reloaded, NavComponent, ReloadedFooter]
})
export class AppModule { }
