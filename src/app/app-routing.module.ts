import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { EMailComponent } from './e-mail/e-mail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LearnflowComponent } from './learnflow/learnflow.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialsComponent } from './socials/socials.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '', component: HomeComponent },
  { path: '', component: AboutMeComponent },
  { path: '', component: LearnflowComponent },
  { path: '', component: ProjectsComponent },
  { path: '', component: ContactComponent },
  { path: '', component: EMailComponent },
  { path: '', component: SocialsComponent },
  { path: '', component: FooterComponent },
  { path: '', component: ImprintComponent },
  { path: '', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
