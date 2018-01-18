import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service'

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
            this.nomeRestaurante = this.service.restaurantes[Number(chave.id)-1].restaurante;
        }
        else {
            this.title = "Cadastrar Restaurante";
            this.service.operacao = "I";
        }
    }

    public Salvar() {
        alert("Salvo com sucesso!");
        this.router.navigate(['/Gerenciar/Restaurante']);
    }
}
