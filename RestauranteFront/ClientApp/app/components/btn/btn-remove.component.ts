import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { Router } from "@angular/router";
import { AppService } from "../app.service";

@Component({
    selector: 'child-cell',
    templateUrl: './btn-remove.component.html',
    styleUrls: ['./btn-remove.component.css']
})
export class BtnRemoveComponent implements ICellRendererAngularComp {
    public params: any;

    constructor(private router: Router, private service: AppService ) { }

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        let url: string = this.router.url;

        if (url.indexOf("Restaurante") !== -1) {
            this.service.RemoverRestaurante(this.params.node.data.RestauranteId);
            this.refresh();
        }
        else {
            this.service.RemoverPrato(this.params.node.data.PratoId);
        }
    }

    refresh(): boolean {
        return false;
    }
}