import { Component } from "@angular/core";

@Component({
    selector:'company-phase',
    templateUrl:'./company-phase.component.html',
    styleUrls:['./company-phase.component.css'],
})
export class CompanyPhaseComponent{
    phases:Phase[] = [
        {name:"Idea",iconClass:"far fa-lightbulb",link:"#"},
        {name:"Startup",iconClass:"icofont-rocket-alt-1",link:"#"},
        {name:"Growth",iconClass:"icofont-mustache",link:"#"},
    ];
    activeIndex=0;
}
class Phase {
     name!:string;
     iconClass!:string;
     link!:string;
}