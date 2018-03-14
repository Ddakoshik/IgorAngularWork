import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

const routes: Routes = [
    { path: '', component: FormComponent,
    children: [
      { path: '', redirectTo: 'templateDrivenFormsComponent', pathMatch: 'full' },
      { path: 'templateDrivenFormsComponent', component: TemplateDrivenFormsComponent },
      { path: 'userInputComponent', component: UserInputComponent },
      { path: 'dynamicForms', component: DynamicFormsComponent },
      { path: 'reactiveForms', component: ReactiveFormsComponent },
    ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
      ],
    exports: [RouterModule]
})
export class FormRoutingModule {
}
