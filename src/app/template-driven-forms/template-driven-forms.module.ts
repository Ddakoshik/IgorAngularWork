import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module'
import { FormsModule }   from '@angular/forms';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenFormsRoutingModule
  ],
  declarations: [
    TemplateDrivenFormsComponent,
    HeroFormComponent
  ]
})
export class TemplateDrivenFormsModule { }
