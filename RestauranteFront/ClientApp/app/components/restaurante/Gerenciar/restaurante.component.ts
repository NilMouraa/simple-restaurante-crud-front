import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'restaurante',
    templateUrl: './restaurante.component.html'
})
export class RestauranteComponent {
    private title: string;

    constructor(private service: AppService ) {
        this.title = "Restaurantes";
    }
}
