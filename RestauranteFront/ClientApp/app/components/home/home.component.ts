import { Component, Inject } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    private title: string;
    private imageUrl: string;

    constructor( @Inject('BASE_URL') baseUrl: string) {
        this.title = "Home";
        this.imageUrl = baseUrl + "images/doner-kebab.jpg";

    }
}
