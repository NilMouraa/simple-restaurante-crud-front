import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
    selector: 'child-cell',
    templateUrl: './btn-remove.component.html',
    styleUrls: ['./btn-remove.component.css']
})
export class BtnRemoveComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        this.params.context.componentParent.Remover(this.params.node.data);
    }

    refresh(): boolean {
        return false;
    }
}