import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'prato',
    templateUrl: './prato.component.html'
})

export class PratoComponent {
    private title: string;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.title = 'Pratos';

        //http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
        //    console.log(result.json());
        //    this.forecasts = result.json() as WeatherForecast[];
        //}, error => console.error(error));
    }
}