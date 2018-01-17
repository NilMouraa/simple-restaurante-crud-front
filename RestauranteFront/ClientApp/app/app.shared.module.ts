import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

// ag-grid
import { AgGridModule } from "ag-grid-angular";


import { AppComponent }         from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';

import { GridComponent } from './components/grid/grid.component';
import { BtnEditComponent } from "./components/grid/btn/btn-edit.component";
import { BtnRemoveComponent } from "./components/grid/btn/btn-remove.component";

import { PanelComponent }       from './components/panel/panel.component';

import { HomeComponent } from './components/home/home.component';

import { RestauranteComponent } from './components/restaurante/Gerenciar/restaurante.component';
import { CadRestauranteComponent } from './components/restaurante/CadastrarEditar/cad.restaurante.component';

import { PratoComponent } from './components/prato/Gerenciar/prato.component';
import { CadPratoComponent } from './components/prato/CadastrarEditar/cad.prato.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        GridComponent,
        BtnEditComponent, 
        BtnRemoveComponent,
        PanelComponent,
        HomeComponent,
        RestauranteComponent,
        CadRestauranteComponent,
        PratoComponent,
        CadPratoComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent }, 
            { path: 'Gerenciar/Restaurante', component: RestauranteComponent },
            { path: 'Cadastrar/Restaurante', component: CadRestauranteComponent },
            { path: 'Gerenciar/Prato', component: PratoComponent },
            { path: 'Cadastrar/Prato', component: CadPratoComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        AgGridModule.withComponents([BtnEditComponent, BtnRemoveComponent])
    ]
})
export class AppModuleShared {
}
