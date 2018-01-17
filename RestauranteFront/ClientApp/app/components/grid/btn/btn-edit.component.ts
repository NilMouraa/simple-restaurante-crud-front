import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
    selector: 'child-cell',
    templateUrl: './btn-edit.component.html',
    styles: [
        '.btn {\
            line-height: 0.5\
        }'
    ]
})
export class BtnEditComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        this.params.context.componentParent.nil(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
    }

    refresh(): boolean {
        return false;
    }
}