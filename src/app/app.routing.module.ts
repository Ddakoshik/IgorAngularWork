import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
// import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'user-input', loadChildren: './user-input/user-input.module#UserInputModule' },
  { path: 'template-driven-forms', loadChildren: './template-driven-forms/template-driven-forms.module#TemplateDrivenFormsModule' },
  { path: 'forms', loadChildren: './forms/form.module#FormModule' },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
