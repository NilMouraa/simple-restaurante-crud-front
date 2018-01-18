import { Component, Inject } from '@angular/core';
import { AppService, Restaurante } from '../../app.service';
import { Http } from '@angular/http';

@Component({
    selector: 'restaurante',
    templateUrl: './restaurante.component.html'
})
export class RestauranteComponent {
    private title: string;
    private filterNomeRestaurante: string;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string, private service: AppService ) {
        this.title = "Restaurantes";
    }

    public PesquisarRestaurante() {
        debugger;
        let filtrados: any = [];
        let termo = this.filterNomeRestaurante;
        this.service.restaurantes.forEach(function (item, index) {
            if (item.Nome.toLowerCase().includes(termo.toLowerCase())){
                filtrados.push(item);
            }
        });
        this.service.apiGridRestaurante.setRowData(filtrados);
    
    }

    public VerificarSeVazio() {
        debugger;
        if (this.filterNomeRestaurante.trim().length == 0) {
            this.service.apiGridRestaurante.setRowData(this.service.restaurantes);
        }
    }
}
