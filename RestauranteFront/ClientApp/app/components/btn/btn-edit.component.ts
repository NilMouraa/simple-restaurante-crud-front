import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { Router } from '@angular/router';

@Component({
    selector: 'child-cell',
    templateUrl: './btn-edit.component.html',
    styleUrls: ['./btn-edit.component.css']
})
export class BtnEditComponent implements ICellRendererAngularComp {
    public params: any;

    constructor(private router: Router) {}

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        let url: string = this.router.url;
        
        if (url.indexOf("Restaurante") !== -1) {
            this.router.navigate(['/Editar/Restaurante', this.params.node.data.RestauranteId]);
        }
        else {
            this.router.navigate(['/Editar/Prato', this.params.node.data.PratoId]);
        }

    }

    refresh(): boolean {
        return false;
    }
}