import { Component } from '@angular/core';

@Component({
    selector: 'foot',
    template:  '<div [innerHTML]="footerText" class="text-center"></div>'
})

export class FooterComponent{
    footerText: string = "PM-app, Personal Medication Angular 2 demo application - developed by <a href=\"https://github.com/macrog\"><i class='fa fa-github'></i></a> macrog"
}