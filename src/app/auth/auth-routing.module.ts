import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './components/signup/signup.component';


const routes: Routes = [
    {path: '', redirectTo: 'sign-up', pathMatch: 'full'},
    {path: 'sign-up', component: SignupComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
