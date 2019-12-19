import { NgModule } from '@angular/core';
// Importante para los ngif ngfor etc
import { CommonModule } from '@angular/common';
// RouterModule
import { RouterModule } from '@angular/router';

// Componentes de modulos nuevos
import { BaseComponent } from './base/base.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({

    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        BaseComponent,
        BreadcrumbsComponent,
        FooterComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
    ],
    exports: [
        BaseComponent,
        BreadcrumbsComponent,
        FooterComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
    ]
})

export class SharedModule { }