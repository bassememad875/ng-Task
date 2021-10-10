import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `<div class="progress">
  <div class="progress-bar bg-info" [style.width]="progress">Progress Plan</div>
</div>`,
   styles: ['.progress-bar { text-align: end;}']
})
export class ProgressBarComponent implements OnInit {

  progress! : string;
  @Input() progressValue! : number;

  constructor() { }

  ngOnInit(): void {
    this.progress = this.progressValue.toString()+"%";
  }

}
