import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

// ag-grid
import { AgGridModule } from "ag-grid-angular";


import { AppComponent }         from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';

import { GridRestauranteComponent } from './components/restaurante/grid/grid.restaurante.component';
import { GridPratoComponent } from './components/prato/grid/grid.prato.component';

import { BtnEditComponent } from "./components/btn/btn-edit.component";
import { BtnRemoveComponent } from "./components/btn/btn-remove.component";

import { PanelComponent }       from './components/panel/panel.component';

import { HomeComponent } from './components/home/home.component';

import { RestauranteComponent } from './components/restaurante/Gerenciar/restaurante.component';
import { CadRestauranteComponent } from './components/restaurante/CadastrarEditar/cad.restaurante.component';

import { PratoComponent } from './components/prato/Gerenciar/prato.component';
import { CadPratoComponent } from './components/prato/CadastrarEditar/cad.prato.component';

import { AppService } from './components/app.service'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        GridRestauranteComponent,
        GridPratoComponent,
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
            { path: '', redirectTo: 'Home', pathMatch: 'full' },
            { path: 'Home', component: HomeComponent }, 
            { path: 'Gerenciar/Restaurante', component: RestauranteComponent },
            { path: 'Cadastrar/Restaurante', component: CadRestauranteComponent },
            { path: 'Editar/Restaurante/:id', component: CadRestauranteComponent },
            { path: 'Gerenciar/Prato', component: PratoComponent },
            { path: 'Cadastrar/Prato', component: CadPratoComponent },
            { path: 'Editar/Prato/:id', component: CadPratoComponent },
            { path: '**', redirectTo: 'Home' }
        ]),
        AgGridModule.withComponents([BtnEditComponent, BtnRemoveComponent])
    ],
    providers: [AppService],
})
export class AppModuleShared {
}
