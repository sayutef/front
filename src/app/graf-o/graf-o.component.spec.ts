import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafOComponent } from './graf-o.component';

describe('GrafOComponent', () => {
  let component: GrafOComponent;
  let fixture: ComponentFixture<GrafOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrafOComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
