import { Component, Inject } from '@angular/core';
import { AppService, Restaurante } from '../../app.service';
import { Http } from '@angular/http';

@Component({
    selector: 'restaurante',
    templateUrl: './restaurante.component.html'
})
export class RestauranteComponent {
    private title: string;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string, private service: AppService ) {
        this.title = "Restaurantes";
    }

    public PesquisarRestaurante() {
        this.http.get(this.baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.service.restaurantes = result.json() as Restaurante[];
        }, error => console.error(error));
    }
}
