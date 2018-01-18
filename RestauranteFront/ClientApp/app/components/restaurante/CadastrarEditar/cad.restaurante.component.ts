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
    private id: any;

    constructor(private router: Router, private routerActive: ActivatedRoute, private service: AppService) {
        let url: string = router.url;
        let chave: any;

        this.routerActive.params.subscribe(params => chave = params);
        this.id = Number(chave.id);
        
        if (url.indexOf("Editar") !== -1) {
            debugger;
            this.title = "Editar Restaurante";
            this.service.operacao = "E";
            this.nomeRestaurante = this.service.restaurantes.filter(x => { return x.RestauranteId == this.id })[0].Nome;
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
            
            debugger;
            
            let restaurante: Restaurante = new Restaurante(this.id, this.nomeRestaurante);
            
            this.service.EditarRestaurante(restaurante);
        }
        else {
            // Incluir
            let restaurante: Restaurante = new Restaurante(0, this.nomeRestaurante);

            this.service.IncluirRestaurante(restaurante);
        }
    }
}
