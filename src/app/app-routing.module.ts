import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroissueFormComponent } from "./cadastrosissue/cadastroissue-form/cadastroissue-form.component";


const routes: Routes = [
    {path: '', redirectTo: '/admin/cadastroissue', pathMatch: 'full'},
    {path: 'admin/cadastroissue', component: CadastroissueFormComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}