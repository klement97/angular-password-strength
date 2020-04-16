import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './components/signup/sign-up.component';


const routes: Routes = [
    {path: '', redirectTo: 'sign-up', pathMatch: 'full'},
    {path: 'sign-up', component: SignUpComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
