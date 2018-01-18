import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class AppService {
    
    public model: object;
    public operacao: string; // E - Edição, R - Remoção e I - Inclusão e P - Pesquisa
    public apiGridPrato: any;
    public apiGridRestaurante: any;
    public restaurantes: Restaurante[];
    public pratos: Prato[];

    constructor(private http: Http, private router: RouterModule, private routerNav: Router ) {
    }

    public ObterTodosRestaurante() {
        return this.http.get("http://localhost:49793/api/restaurante");
    }

    public ObterTodosPrato() {
        return this.http.get("http://localhost:49793/api/prato");
    }

    public IncluirRestaurante(restaurante: Restaurante) {

        let body = JSON.stringify(restaurante);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        debugger;
        return this.http.post("http://localhost:49793/api/restaurante", "'"+body+"'", options)
            .subscribe(result => {
                alert("Salvo com sucesso!");

                this.routerNav.navigate(['/Gerenciar/Restaurante']);

            }, error => console.error(error));
    }

    public IncluirPrato(prato: Prato) {

        let body = JSON.stringify(prato);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        debugger;
        return this.http.post("http://localhost:49793/api/prato", "'" + body + "'", options)
            .subscribe(result => {
                alert("Salvo com sucesso!");
                
                this.routerNav.navigate(['/Gerenciar/Prato']);

            }, error => console.error(error));
    }

    public EditarRestaurante(restaurante: Restaurante) {

        let body = JSON.stringify(restaurante);

        debugger;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put("http://localhost:49793/api/restaurante/" + restaurante.RestauranteId, "'" + body + "'", options)
            .subscribe(result => {
                alert("Editado com sucesso!");

                this.routerNav.navigate(['/Gerenciar/Restaurante']);

            }, error => console.error(error));
    }

    public EditarPrato(prato: Prato) {

        let body = JSON.stringify(prato);

        debugger;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put("http://localhost:49793/api/prato/" + prato.PratoId, "'" + body + "'", options)
            .subscribe(result => {
                alert("Editado com sucesso!");

                this.routerNav.navigate(['/Gerenciar/Prato']);

            }, error => console.error(error));
    }

    public RemoverRestaurante(id: number) {
        this.http.delete("http://localhost:49793/api/restaurante/" + id).subscribe(result => {
            alert("Removido com sucesso!");
            this.ReloadGridRestaurante();
            this.routerNav.navigate(['/Gerenciar/Restaurante']);
        }, error => console.error(error));       
    }

    public RemoverPrato(id: number) {
        this.http.delete("http://localhost:49793/api/prato/" + id).subscribe(result => {
            alert("Removido com sucesso!");
            this.ReloadGridPrato();
            this.routerNav.navigate(['/Gerenciar/Prato']);
        }, error => console.error(error));
    }

    public ReloadGridPrato() {
        this.ObterTodosPrato().subscribe(result => {
            this.pratos = result.json().pratos;
            this.apiGridPrato.setRowData(this.pratos);
        }, error => console.error(error));
    }
    public ReloadGridRestaurante() {
        this.ObterTodosRestaurante().subscribe(result => {
            this.restaurantes = result.json().restaurantes;
            this.apiGridRestaurante.setRowData(this.restaurantes);
        }, error => console.error(error));
    }
}

export class Restaurante {
    public RestauranteId: number;
    public Nome: string;

    constructor(id: number, restaurante: string) {
        this.RestauranteId = id;
        this.Nome = restaurante;
    }
}

export class Prato {
    public PratoId: number;
    public Restaurante: Restaurante;
    public Nome: string;
    public Preco: number;

    constructor(id: number, restaurante: Restaurante, prato: string, preco: number) {
        this.PratoId = id;
        this.Restaurante = restaurante;
        this.Nome = prato;
        this.Preco = preco;
    }
}