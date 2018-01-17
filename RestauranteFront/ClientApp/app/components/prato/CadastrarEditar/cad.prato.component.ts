import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'cad-prato',
    templateUrl: './cad.prato.component.html'
})

export class CadPratoComponent {
    private title: string;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.title = 'Cadastro de Prato';
    }
}