import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { About } from './components/About/about.component';
import { Portfolio } from './components/Portfolio/portfolio.component';
import { Resume } from './components/Resume/resume.component';
import { Contact } from './components/Contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: About
  },
  {
    path: "about",
    component: About
  },
  {
    path: "portfolio",
    component: Portfolio
  },
  {
    path: "resume",
    component: Resume
  },
  {
    path: "contact",
    component: Contact
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
