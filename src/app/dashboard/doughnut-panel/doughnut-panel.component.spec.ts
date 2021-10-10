import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutPanelComponent } from './doughnut-panel.component';

describe('DoughnutPanelComponent', () => {
  let component: DoughnutPanelComponent;
  let fixture: ComponentFixture<DoughnutPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
