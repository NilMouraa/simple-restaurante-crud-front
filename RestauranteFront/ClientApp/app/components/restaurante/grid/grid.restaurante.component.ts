import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { BtnEditComponent } from "../../btn/btn-edit.component";
import { BtnRemoveComponent } from "../../btn/btn-remove.component";
import { AppService } from "../../app.service"

@Component({
    selector: 'grid-restaurante',
    templateUrl: './grid.restaurante.component.html',
    styleUrls: ['./grid.restaurante.component.css']
})

export class GridRestauranteComponent {
    private context: any;
    private gridApi: any;
    private gridColumnApi: any;
    private rowSelection: any;
    private columnDefs: any;
    private autoGroupColumnDef: any;
    private groupDefaultExpanded: any;
    private frameworkComponents: any;
    

    constructor(private http: Http, private service: AppService) {
        
        this.service.operacao = "P";

        this.context = { componentParent: this };

        this.frameworkComponents = {
            BtnEditComponent: BtnEditComponent,
            BtnRemoveComponent: BtnRemoveComponent
        };

        this.columnDefs = [
            { width: 80, cellRenderer: 'BtnRemoveComponent'},
            { width: 80, cellRenderer: 'BtnEditComponent'},
            { width: 1000, headerName: 'Restaurante', field: 'restaurante' },
        ]

        this.autoGroupColumnDef = {
            headerName: "Restaurante",
            field: "restaurante",
            width: 300,
            cellRenderer: "agGroupCellRenderer",
            cellRendererParams: { checkbox: true }
        };

        this.rowSelection = "multiple";

        this.groupDefaultExpanded = -1;
    }

    onGridReady(params: any) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        let arraydata = this.service.restaurantes;

        this.gridApi.setRowData(arraydata);
    }

    onSelectionChanged(params: any) {
        
        var selectedRows = this.gridApi.getSelectedRows();
        this.service.model = selectedRows;
    }

    public Editar(row:any) {
        alert("Editar");
        console.log(row);
    }

    public Remover(row: any) {
        debugger;
        
        if (confirm("Tem certeza que deseja remover?")) {
            alert("Restaurante removido com sucesso.");
        }
    }
    
}
