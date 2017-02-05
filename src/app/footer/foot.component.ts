import { Component } from '@angular/core';

@Component({
    selector: 'foot',
    template:  '<div class="text-center"><p [innerHTML]="footerText"></p></div>',
    styles:['p{margin: 0px; opacity:0.6}']
})

export class FooterComponent{
    footerText: string = "PM-app, Personal Medication Angular 2 demo application - developed by <a href=\"https://github.com/macrog\"><i class='fa fa-github'></i></a> macrog"
}