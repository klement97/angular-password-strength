import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

    {path: '*', redirectTo: ''}
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
