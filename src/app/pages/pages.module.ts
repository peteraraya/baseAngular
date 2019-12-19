import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardpmuComponent } from './dashboard/dashboardpmu/dashboardpmu.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardpmuComponent
    ],
    exports: [
        PagesComponent,
        DashboardpmuComponent
    ],
    imports: [
        SharedModule, // Llamo a modulos de carpeta shared donde estan cargados los componentes del menu
        PAGES_ROUTES,
        FormsModule
    ]
})

export class PagesModules { }