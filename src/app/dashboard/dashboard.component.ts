import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/white-panel/white-panel.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageName = "Dashboard";
  teamMembers : Item[] =[
    {img:"../../assets/img/Avatar.png",name:"Riham Abu Elinin" ,details:"CEO,Founder" ,actionName: '', extraLine:''},
    {img:"../../assets/img/Avatar.png",name:"Ahmed Maher" ,details:"Founder" ,actionName: '', extraLine:''},
    {img:"../../assets/img/Avatar.png",name:"Nourane El Sherif" ,details:"Project Manager",actionName: '', extraLine:''}, 
    {img:"../../assets/img/add-icon.png",name:"Add Member" ,details:"Member role",actionName: '', extraLine:''}, 

  ];
  teamMemberCount = 5;
  progress = "75%";
  constructor( ) { 
  }

  ngOnInit(): void {
    
  }

}
