import { Component, Inject } from '@angular/core';
import { Http } from "@angular/http";
import { BtnEditComponent } from "../../btn/btn-edit.component";
import { BtnRemoveComponent } from "../../btn/btn-remove.component";
import { RouterModule } from '@angular/router';
import { AppService, Restaurante, Prato } from '../../app.service';

@Component({
    selector: 'grid-prato',
    templateUrl: './grid.prato.component.html',
    styleUrls: ['./grid.prato.component.css']
})

export class GridPratoComponent {
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
            { width: 500, headerName: 'Restaurante', field: 'Restaurante.Nome' },
            { width: 300, headerName: 'Prato', field: 'Nome' },
            { width: 120, headerName: 'Preco', field: 'Preco' }
        ]

        this.rowSelection = "multiple";

        this.groupDefaultExpanded = -1;
    }

    onGridReady(params: any) {
        this.gridApi = params.api;
        this.service.apiGridPrato = this.gridApi;
        this.gridColumnApi = params.columnApi;

        let arraydata;

        // Obter todos os pratos.
        this.service.ObterTodosPrato().subscribe(result => {
                this.service.pratos = result.json().pratos;
                arraydata = this.service.pratos;
                this.gridApi.setRowData(arraydata);
        }, error => console.error(error));
        
    }

    onSelectionChanged(params: any) {
        var selectedRows = this.gridApi.getSelectedRows();
        this.service.model = selectedRows;
    }
    
    public Editar(row:any) {
        console.log(row);
    }

    public Remover(row: any) {
        debugger;
        if (confirm("Tem certeza que deseja remover?")) {
            alert("Prato removido com sucesso.");    
        }
    }
    
}
