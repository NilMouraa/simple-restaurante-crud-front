import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService, Restaurante } from '../../app.service'

@Component({
    selector: 'cad-restaurante',
    templateUrl: './cad.restaurante.component.html',
    styleUrls: ['./cad.restaurante.component.css']
})
export class CadRestauranteComponent {
    private title: string;
    private nomeRestaurante: string;
    
    constructor(private router: Router, private routerActive: ActivatedRoute, private service: AppService) {
        let url: string = router.url;
        let chave: any;

        this.routerActive.params.subscribe(params => chave = params);

        if (url.indexOf("Editar")!== -1) {
            this.title = "Editar Restaurante";
            this.service.operacao = "E";
            this.nomeRestaurante = this.service.restaurantes[Number(chave.id) - 1].Nome;
        }
        else {
            this.title = "Cadastrar Restaurante";
            this.service.operacao = "I";
        }
    }

    public Salvar() {

        let url: string = this.router.url;

        if (url.indexOf("Editar") !== -1) {
            // Editar
            let chave: any;
            this.routerActive.params.subscribe(params => chave = params);

            let restaurante: Restaurante = new Restaurante(this.service.restaurantes[chave].RestauranteId, this.nomeRestaurante);
            this.service.IncluirRestaurante(restaurante);

            this.service.EditarRestaurante(restaurante);
        }
        else {
            // Incluir
            let restaurante: Restaurante = new Restaurante(0, this.nomeRestaurante);

            this.service.IncluirRestaurante(restaurante);
        }
    }
}
