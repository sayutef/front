import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGrafComponent } from './all-graf.component';

describe('AllGrafComponent', () => {
  let component: AllGrafComponent;
  let fixture: ComponentFixture<AllGrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllGrafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
