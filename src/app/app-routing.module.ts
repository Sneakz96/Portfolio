import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataProtectionWrapperComponent } from './data-protection-wrapper/data-protection-wrapper.component';
import { ImprintWrapperComponent } from './imprint-wrapper/imprint-wrapper.component';
import { LandingPageWrapperComponent } from './landing-page-wrapper/landing-page-wrapper.component';

const routes: Routes = [
  { path: '', component: LandingPageWrapperComponent },
  { path: 'imprint', component: ImprintWrapperComponent },
  { path: 'data-protection', component: DataProtectionWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
