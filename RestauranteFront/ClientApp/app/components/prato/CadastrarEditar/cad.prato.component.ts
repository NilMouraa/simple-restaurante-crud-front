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
    private id: any

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private router: Router, private routerActive: ActivatedRoute, private service: AppService) {
        let url: string = router.url;
        let chave: any;

        this.routerActive.params.subscribe(params => chave = params);
        this.id = Number(chave.id);

        if (url.indexOf("Editar") !== -1) {
            this.title = "Editar Prato";
            this.service.operacao = "E";
            let prato = this.service.pratos.filter(x => { return x.PratoId == this.id })[0];

            this.idRestaurante = prato.Restaurante.RestauranteId;
            this.nomePrato = prato.Nome;
            this.precoPrato = prato.Preco;
        }
        else {
            this.title = "Cadastrar Prato";
            this.service.operacao = "I";
        }

        // Obter todos os restaurantes.
        this.service.ObterTodosRestaurante().subscribe(result => {
            this.service.restaurantes = result.json().restaurantes;
            this.restaurantes = this.service.restaurantes;
        }, error => console.error(error));
    }

    public Salvar() {
        let url: string = this.router.url;
        let restaurante = this.service.restaurantes.filter(x => { return x.RestauranteId == this.idRestaurante })[0];

        if (url.indexOf("Editar") !== -1) { 
            // Editar
            debugger;
            
            let prato: Prato = new Prato(this.id, restaurante, this.nomePrato, this.precoPrato);

            this.service.EditarPrato(prato);
        }
        else {
            // Incluir
            
            debugger;
            let prato: Prato = new Prato(0, restaurante, this.nomePrato, this.precoPrato)

            this.service.IncluirPrato(prato);
        }
        
    }
}