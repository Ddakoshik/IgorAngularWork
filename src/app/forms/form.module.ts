import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { UserInputModule } from './user-input/user-input.module';

import { FormComponent } from './form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HeroFormComponent } from './template-driven-forms/hero-form/hero-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    UserInputModule,
  ],
  declarations: [
    FormComponent,
    TemplateDrivenFormsComponent,
    UserInputComponent,
    HeroFormComponent,
  ],
  
  exports: [
    FormComponent,
    TemplateDrivenFormsComponent,
    UserInputComponent,
    UserInputModule,
  ],
})
export class FormModule { }
 