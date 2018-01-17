import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { BtnEditComponent } from "./btn/btn-edit.component";
import { BtnRemoveComponent } from "./btn/btn-remove.component";

@Component({
    selector: 'grid-root',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})

export class GridComponent {
    private context: any;
    private gridApi: any;
    private gridColumnApi: any;
    private rowSelection: any;
    private columnDefs: any;
    private autoGroupColumnDef: any;
    private groupDefaultExpanded: any;
    private frameworkComponents: any;

    constructor(private http: Http) {
        this.context = { componentParent: this };

        this.frameworkComponents = {
            BtnEditComponent: BtnEditComponent,
            BtnRemoveComponent: BtnRemoveComponent
        };

        this.columnDefs = [
            {
                width: 80, cellRenderer: 'BtnRemoveComponent'
            },
            {
                width: 80, cellRenderer: 'BtnEditComponent'
            },
            { headerName: 'Restaurante', field: 'restaurante' },
            { headerName: 'Prato', field: 'prato' },
            { headerName: 'Preço', field: 'preco' }
        ]
        this.autoGroupColumnDef = {
            headerName: "Country",
            field: "country",
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
        let arraydata = [
            { restaurante: "Restaurante 1", prato: "Macarrão", preco: "20.00" },
            { restaurante: "Restaurante 2", prato: "Lasanha", preco: "20.00" },
            { restaurante: "Restaurante 3", prato: "Peixe", preco: "20.00" },
            { restaurante: "Restaurante 4", prato: "Arroz", preco: "20.00" },
        ]
        params.api.setRowData(arraydata);
        //this.http
        //    .get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
        //    .subscribe(data => {
        //        console.log(data.json());
        //        params.api.setRowData(data.json());
        //    });
    }

    onSelectionChanged(params: any) {
        
        var selectedRows = this.gridApi.getSelectedRows();
        var selectedRowsString = "";
        
        selectedRows.forEach(function (selectedRow: any, index: any) {
            if (index !== 0) {
                selectedRowsString += ", ";
            }
            selectedRowsString += selectedRow.athlete;
        });
    }

    public nil(cell:any) {
        alert("Parent Component Method from " + cell + "!");
    }
}
