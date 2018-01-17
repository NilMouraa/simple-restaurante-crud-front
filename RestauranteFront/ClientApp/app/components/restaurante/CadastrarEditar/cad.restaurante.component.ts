import { Component } from '@angular/core';

@Component({
    selector: 'cad-restaurante',
    templateUrl: './cad.restaurante.component.html',
    styleUrls: ['./cad.restaurante.component.css']
})
export class CadRestauranteComponent {
    private title: string;

    constructor() {
        this.title = "Cadastro Restaurante";
    }
}
