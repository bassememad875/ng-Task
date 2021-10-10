import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector:'sidebar-buttons',
    templateUrl :'./buttons-group.component.html',
    styleUrls:['./buttons-group.component.css'],

})

export class ButtonsGroupComponent implements OnInit {
    @Input() isDisabled! : boolean;
    constructor(){}
    ngOnInit():void{}
}