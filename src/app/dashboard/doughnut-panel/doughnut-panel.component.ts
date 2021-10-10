import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'doughnut-panel',
  templateUrl: './doughnut-panel.component.html',
  styleUrls: ['./doughnut-panel.component.css']
})
export class DoughnutPanelComponent implements OnInit {
  marketSize = "$2.7M";
  constructor() { }

  ngOnInit(): void {
    var myDounat = new Chart( "chart_4" , 
    {
      type:"doughnut",
      data:{
        labels:['Students in EG', 'SMEs in EG', 'Sponsors in EG', 'Sponsor in UAE'],
        datasets:[
          {
            data: [35, 15, 25, 20],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)'
            ],
          }
        ]
      }
    }
    );
  }

}
