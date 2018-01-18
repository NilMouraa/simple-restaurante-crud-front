import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class AppService {
    handleError(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    public model: object;
    public operacao: string; // E - Edição, R - Remoção e I - Inclusão e P - Pesquisa

    public restaurantes: Restaurante[];
    public pratos: Prato[];

    constructor(private http: Http, private router: RouterModule, private routerNav: Router, ) {


        this.http.get("http://localhost:49793/api/prato").subscribe(result => {
            this.pratos = result.json().pratos;
        }, error => console.error(error));

        this.http.get("http://localhost:49793/api/restaurante").subscribe(result => {
            this.restaurantes = result.json().restaurantes;
        }, error => console.error(error));
        
    }
    
    public IncluirRestaurante(restaurante: Restaurante) {

        let body = JSON.stringify(restaurante);

        debugger;
        return this.http.post("http://localhost:49793/api/restaurante", { value: body })
            .subscribe(result => {
                alert(result);
                alert("Salvo com sucesso!");

                this.routerNav.navigate(['/Gerenciar/Restaurante']);

            }, error => console.error(error));
    }

    public IncluirPrato(prato: Prato) {

        let body = JSON.stringify(prato);

        debugger;
        return this.http.post("http://localhost:49793/api/prato", { value: body })
            .subscribe(result => {
                alert(result);
                alert("Salvo com sucesso!");

                this.routerNav.navigate(['/Gerenciar/Prato']);

            }, error => console.error(error));
    }

    public EditarRestaurante(restaurante: Restaurante) {

        let body = JSON.stringify(restaurante);

        debugger;
        return this.http.put("http://localhost:49793/api/restaurante", { id: restaurante.RestauranteId, value: body })
            .subscribe(result => {
                alert(result);
                alert("Editado com sucesso!");

                this.routerNav.navigate(['/Gerenciar/Restaurante']);

            }, error => console.error(error));
    }

    public EditarPrato(prato: Prato) {

        let body = JSON.stringify(prato);

        debugger;
        return this.http.put("http://localhost:49793/api/prato", { id: prato.PratoId, value: body })
            .subscribe(result => {
                alert(result);
                alert("Editado com sucesso!");

                this.routerNav.navigate(['/Gerenciar/Prato']);

            }, error => console.error(error));
    }

    public RemoverRestaurante(id: number) {
        this.http.delete("http://localhost:49793/api/restaurante/" + id).subscribe(result => {
            alert("Removido com sucesso!");
            alert(result);
            this.routerNav.navigate(['/Gerenciar/Restaurante']);
        }, error => console.error(error));       
    }

    public RemoverPrato(id: number) {
        this.http.delete("http://localhost:49793/api/prato/" + id).subscribe(result => {
            alert(result);
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