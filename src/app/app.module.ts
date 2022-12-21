import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LearnflowComponent } from './learnflow/learnflow.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EMailComponent } from './e-mail/e-mail.component';
import { SocialsComponent } from './socials/socials.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageWrapperComponent } from './landing-page-wrapper/landing-page-wrapper.component';
import { DataProtectionWrapperComponent } from './data-protection-wrapper/data-protection-wrapper.component';
import { ImprintWrapperComponent } from './imprint-wrapper/imprint-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    LearnflowComponent,
    ProjectsComponent,
    ContactComponent,
    EMailComponent,
    SocialsComponent,
    HomeComponent,
    FooterComponent,
    ImprintComponent,
    DataProtectionComponent,
    LandingPageWrapperComponent,
    DataProtectionWrapperComponent,
    ImprintWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
