import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';

@Injectable()
export class AppService {
    public model: object;
    public operacao: string; // E - Edição, R - Remoção e I - Inclusão e P - Pesquisa

    public restaurantes: Restaurante[];
    public pratos: Prato[];

    constructor(private router: RouterModule) {
        this.pratos = [
            new Prato(1, "Restaurante 1", "Macarrao", 20.00),
            new Prato(2, "Restaurante 2", "Lasanha", 30.00),
            new Prato(3, "Restaurante 3", "Peixe", 40.00),
            new Prato(4, "Restaurante 4", "Arroz", 50.00),
        ];

        this.restaurantes = [
            new Restaurante(1, "Restaurante 1"),
            new Restaurante(2, "Restaurante 2"),
            new Restaurante(3, "Restaurante 3"),
            new Restaurante(4, "Restaurante 4")
        ];
    }

}

export class Restaurante {
    public id: number;
    public restaurante: string;

    constructor(id: number, restaurante: string) {
        this.id = id;
        this.restaurante = restaurante;
    }
}

export class Prato {
    public id: number;
    public restaurante: string;
    public prato: string;
    public preco: number;

    constructor(id: number, restaurante: string, prato: string, preco: number) {
        this.id = id;
        this.restaurante = restaurante;
        this.prato = prato;
        this.preco = preco;
    }
}