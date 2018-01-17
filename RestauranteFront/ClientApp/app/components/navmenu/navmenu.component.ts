import { Component, Inject } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    private imageUrl: string;

    constructor( @Inject('BASE_URL') baseUrl: string) {
        this.imageUrl = baseUrl + "images/waiter.png";
    }        
}
