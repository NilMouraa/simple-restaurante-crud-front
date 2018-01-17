import { Component } from '@angular/core';

@Component({
    selector: 'restaurante',
    templateUrl: './restaurante.component.html'
})
export class RestauranteComponent {
    private title: string;

    constructor() {
        this.title = "Restaurantes";
    }
}
