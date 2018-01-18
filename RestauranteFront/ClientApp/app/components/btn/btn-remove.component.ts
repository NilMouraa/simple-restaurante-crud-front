import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { Router } from "@angular/router";
import { AppService } from "../app.service";
import swal from 'sweetalert2'

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
            swal({
                title: 'Tem certeza que deseja remover o restaurante?',
                text: "A remoção é irreversível!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: "Não",
                confirmButtonText: 'Sim, remova!'
            }).then((result) => {
                if (result.value) {

                    this.service.RemoverRestaurante(this.params.node.data.RestauranteId);
                    swal(
                        'Removido!',
                        'O restaurante foi removido com sucesso!',
                        'success'
                    )
                }
            });
        }
        else {
            swal({
                title: 'Tem certeza que deseja remover o prato?',
                text: "A remoção é irreversível!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: "Não",
                confirmButtonText: 'Sim, remova!'
            }).then((result) => {
                if (result.value) {

                    this.service.RemoverPrato(this.params.node.data.PratoId);
                    swal(
                        'Removido!',
                        'O prato foi removido com sucesso!',
                        'success'
                    )
                }
            });
            
        }
    }

    refresh(): boolean {
        return false;
    }
}