import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service'

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
            this.idRestaurante = prato.id;
            this.nomePrato = prato.prato;
            this.precoPrato = prato.preco;
        }
        else {
            this.title = "Cadastrar Restaurante";
            this.service.operacao = "I";
        }

        this.restaurantes = [
            { id: 1, nome: "Restaurante1" },
            { id: 2, nome: "Restaurante2" },
            { id: 3, nome: "Restaurante3" },
            { id: 4, nome: "Restaurante4" },
            { id: 5, nome: "Restaurante5" },
            { id: 6, nome: "Restaurante6" }
           ]
    }

    public Salvar() {
        alert("Salvo com sucesso!");
        this.router.navigate(['/Gerenciar/Prato']);
    }
}