import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService, Prato, Restaurante } from '../../app.service'

@Component({
    selector: 'cad-prato',
    templateUrl: './cad.prato.component.html'
})

export class CadPratoComponent {
    private title: string;
    private restaurantes: object[];
    private idRestaurante: number;
    private nomePrato: string;
    private precoPrato: number;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private router: Router, private routerActive: ActivatedRoute, private service: AppService) {
        let url: string = router.url;
        let chave: any;

        this.routerActive.params.subscribe(params => chave = params);

        if (url.indexOf("Editar") !== -1) {
            this.title = "Editar Restaurante";
            this.service.operacao = "E";
            let prato = this.service.pratos[Number(chave.id) - 1];
            this.idRestaurante = prato.Restaurante.RestauranteId;
            this.nomePrato = prato.Nome;
            this.precoPrato = prato.Preco;
        }
        else {
            this.title = "Cadastrar Restaurante";
            this.service.operacao = "I";
        }

        this.restaurantes = this.service.restaurantes;
    }

    public Salvar() {
        let url: string = this.router.url;

        if (url.indexOf("Editar") !== -1) { 
            // Editar
            let chave: any;
            this.routerActive.params.subscribe(params => chave = params);

            let Restaurante: Restaurante = this.service.restaurantes[this.idRestaurante];
            let prato: Prato = new Prato(chave, Restaurante, this.nomePrato, this.precoPrato);

            this.service.EditarPrato(prato);
        }
        else {
            // Incluir
            let restaurante: Restaurante = this.service.restaurantes[this.idRestaurante];
            let prato: Prato = new Prato(0, restaurante, this.nomePrato, this.precoPrato)

            this.service.IncluirPrato(prato);
        }
        
    }
}