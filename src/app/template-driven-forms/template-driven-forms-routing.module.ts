import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormsComponent } from './template-driven-forms.component';

const routeschild: Routes = [
    { path: '', component: TemplateDrivenFormsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routeschild)],
    exports: [RouterModule]
})
export class TemplateDrivenFormsRoutingModule {
}
