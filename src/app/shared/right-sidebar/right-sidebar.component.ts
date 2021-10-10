import { Component } from "@angular/core";
import { Item } from "../white-panel/white-panel.component";

@Component({
    selector: 'app-right-sidebar',
    templateUrl:'./right-sidebar.component.html',
    styleUrls:['./right-sidebar.component.css']
})
export class RightSidebarComponent {
 programs : Item[] =[
     {img:"../../assets/img/Avatar.png" ,name:"Program Name" , details:"3 May 2019" ,extraLine:"",actionName:"Apply"},
     {img:"../../assets/img/Avatar.png",name:"Program Name" , details:"3 May 2019" ,extraLine:"" ,actionName:"Apply"},
     {img:"../../assets/img/Avatar.png",name:"Program Name" , details:"3 May 2019" ,extraLine:"",actionName:"Apply"},
];

 services : Item[] =[
     {img:"../../assets/img/Avatar.png",name:"The District Egypt" , details:"Maadi" ,extraLine:"CO-working space", actionName:""},
     {img:"../../assets/img/Avatar.png",name:"The District Egypt" , details:"Maadi" ,extraLine:"CO-working space", actionName:""},
     {img:"../../assets/img/Avatar.png",name:"The District Egypt" , details:"Maadi" ,extraLine:"CO-working space", actionName:""},    
];

 experts: Item[]=[
    {img:"../../assets/img/Avatar.png",name:"Expert Name" , details:"3 May 2019" ,extraLine:"",actionName:"Hire"},
    {img:"../../assets/img/Avatar.png",name:"Expert Name" , details:"3 May 2019" ,extraLine:"",actionName:"Hire"},
    {img:"../../assets/img/Avatar.png",name:"Expert Name" , details:"3 May 2019" ,extraLine:"",actionName:"Hire"},
 ]

}