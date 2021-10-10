import { Component, Input } from "@angular/core";

export class Item {
  
    constructor( public img : string,public name:string , public details: string ,public extraLine:string , public actionName:string){

    }

}

@Component({
    selector:'white-panel',
    templateUrl:'./white-panel.component.html',
    styleUrls:['./white-panel.component.css']
})
export class WhitePanelComponent{
    @Input() items!:Item[];
    @Input() name!:string;
    @Input() panelTitle!:string;
    @Input() number!:number;
    @Input() showNumber:boolean = null ||  false;
    @Input() hasAction:boolean = null ||  false;
    @Input() isThreeLine:boolean  = null ||  false;
}