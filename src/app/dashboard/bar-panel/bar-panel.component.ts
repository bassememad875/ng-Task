import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'bar-panel',
  templateUrl: './bar-panel.component.html',
  styleUrls: ['./bar-panel.component.css']
})
export class BarPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myBar1 = new Chart("chart_1",
      {
        type: "bar",
        data: {
          labels: ['Y16', 'Y17', 'Y18', 'Y19', 'Y20'],
          datasets: [
            {
              data: [84, 297, 634, 993, 1400],
              backgroundColor: [
                'rgb(0, 165, 254)',
                'rgb(0, 165, 254)',
                'rgb(0, 165, 254)',
                'rgb(0, 165, 254)',
                'rgb(0, 165, 254)',
              ],
              hoverBackgroundColor: [

              ],
            }
          ]
        },

      }
    );

    var myBar2 = new Chart("chart_2",
      {
        type: "bar",
        data: {
          labels: ['Y16', 'Y17', 'Y18', 'Y19', 'Y20'],

          datasets: [
            {
              data: [84, 297, 634, 993, 1400],
              backgroundColor: [
                'rgb(255, 187, 51)',
                'rgb(255, 187, 51)',
                'rgb(255, 187, 51)',
                'rgb(255, 187, 51)',
                'rgb(255, 187, 51)',

              ],
              hoverBackgroundColor: [
                'rgb(255, 177, 20)',
                'rgb(255, 177, 20)',
                'rgb(255, 177, 20)',
                'rgb(255, 177, 20)',
                'rgb(255, 177, 20)',
              ],

            }
          ],
        }
      }
    );


    var myBar3 = new Chart("chart_3",
      {
        type: "bar",
        data: {
          labels: ['Y16', 'Y17', 'Y18', 'Y19', 'Y20'],
          datasets: [
            {
              data: [-500, 297, 634, -993, 1400],
              backgroundColor: [
                '#ED1D24',
                '#2ECC71',
                '#2ECC71',
                '#ED1D24',
                '#2ECC71',

              ],
              hoverBackgroundColor: [
                '#F00008',
                '#06DB5E',
                '#06DB5E',
                '#F00008',
                '#06DB5E',
              ],

            }
          ],
        },
        options:{
          scales:{
            scaleLabel:{
              display:false
            }
          }
        }
      }
    );
  }
}
