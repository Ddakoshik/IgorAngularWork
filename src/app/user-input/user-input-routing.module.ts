import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './user-input.component';


const routeschild: Routes = [
    { path: '', component: UserInputComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routeschild)],
    exports: [RouterModule]
})
export class UserInputRoutingModule {
}
