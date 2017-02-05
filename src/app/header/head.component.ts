import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'headD',
    templateUrl: 'head.component.html',
    styleUrls:['head.component.css']
})

export class HeaderComponent{
    pageTitle: string = "HEALTH CENTRE OF X-CITY"
}