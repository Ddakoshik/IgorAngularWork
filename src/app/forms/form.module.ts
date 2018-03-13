import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { UserInputModule } from './user-input/user-input.module';
import { ReactiveFormsModule} from '@angular/forms';

import { FormComponent } from './form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HeroFormComponent } from './template-driven-forms/hero-form/hero-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HeroDetailComponent } from './reactive-forms/hero-detail/hero-detail.component';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    UserInputModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormComponent,
    TemplateDrivenFormsComponent,
    UserInputComponent,
    HeroFormComponent,
    FormValidationComponent,
    ReactiveFormsComponent,
    HeroDetailComponent,
  ],
  
  exports: [
    FormComponent,
    TemplateDrivenFormsComponent,
    UserInputComponent,
    UserInputModule,
  ],
})
export class FormModule { }
 