import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { CadastroissueFormComponent } from '../cadastrosissue/cadastroissue-form/cadastroissue-form.component';

@NgModule({
    declarations: [
        CadastroissueFormComponent

    ],
    imports: [
        AppRoutingModule
    ],
    providers: [

    ],
    exports: [
        AppRoutingModule,
        CadastroissueFormComponent
    ]
})
export class CoreModule {}