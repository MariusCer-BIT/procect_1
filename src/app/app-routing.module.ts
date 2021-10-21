import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProduktaiComponent } from './produktai/produktai.component';
import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { ApiemusComponent } from './apiemus/apiemus.component';


// Cia aprasomi musu aplikaciju pulapiai
const routes: Routes = [
  { path: 'produktai-component', component: ProduktaiComponent },
  { path: 'kontaktai-component', component: KontaktaiComponent },
  { path: 'apiemus-component', component: ApiemusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
