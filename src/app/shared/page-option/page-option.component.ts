import { Component, Input } from "@angular/core";

class Finance{
    public name!:string;
    public viewValue!:string;
}

@Component({
    selector:'page-option',
    templateUrl:'./page-option.component.html',
    styleUrls:['./page-option.component.css']
})

export class PageOptionComponent {
    finances:Finance[] =[
        {name:"Starting Forecast test", viewValue:"Starting Forecast test"},
        {name:"Starting Forecast test 2", viewValue:"Forecast test 2"},
        {name:"Starting Forecast test 3", viewValue:"Forecast test 3"},
        {name:"Starting Forecast test 4", viewValue:"Forecast test 4"},
    ];
    @Input() pageName!:string;
}